//
//
//

import React from "react";
import db, { Lists_DB, Translations_DB, Vocabs_DB } from "../..";

import { List_MODEL, Translation_MODEL, Vocab_MODEL } from "../../models";
import { Q } from "@nozbe/watermelondb";

export type UpdateVocab_PROPS = {
  list: List_MODEL;
  id: string;
  difficulty: 1 | 2 | 3;
  description?: string;
  image?: string;
  is_public?: boolean;
  is_publicly_visible?: boolean;

  translations: {
    lang_id: string;
    text: string;
    highlights: string;
  }[];
};

export default async function UPDATE_vocab(incomingVocab: UpdateVocab_PROPS) {
  await db.write(async () => {
    // Create a new vocab record

    const targetVocab = await Vocabs_DB.find(incomingVocab.id);

    if (!targetVocab) return console.error("🔴 No vocab found to update 🔴");

    await targetVocab.update((vocab) => {
      vocab.list.set(incomingVocab.list);
      vocab.difficulty = incomingVocab.difficulty || 3;
      vocab.description = incomingVocab.description || "";
      vocab.image = incomingVocab.image || "";
      vocab.is_public = incomingVocab.is_public || false;
      vocab.is_publicly_visible = incomingVocab.is_publicly_visible || false;
    });

    const newTRs = incomingVocab.translations;
    const oldTRS = (await targetVocab.translations.fetch()) || "";

    // loop through old vocabs
    oldTRS?.forEach(async (oldTR) => {
      // if an old vocab is not inluded in the new list --> delete
      if (!newTRs.some((newTR) => newTR.lang_id === oldTR.lang_id)) {
        await oldTR.markAsDeleted();
      }
    });

    // loop through new vocabs
    newTRs?.forEach(async (newTR) => {
      // if a new vocab is not inluded in the old list --> create
      if (!oldTRS.some((oldTR) => oldTR.lang_id === newTR.lang_id)) {
        await Translations_DB.create((tr) => {
          tr.vocab.set(targetVocab); // Link the translation to the vocab
          tr.lang_id = newTR.lang_id;
          tr.text = newTR.text;
          tr.highlights = newTR.highlights;
        });
      }
      // if a new vocab is already in the old vocabs --> update
      if (oldTRS.some((oldTR) => oldTR.lang_id === newTR.lang_id)) {
        const targetTR = oldTRS.find(
          (oldTR) => oldTR.lang_id === newTR.lang_id
        );
        if (targetTR) {
          await targetTR.update((tr) => {
            tr.text = newTR.text;
            tr.highlights = newTR.highlights;
          });
        }
      }
    });
  });
}
