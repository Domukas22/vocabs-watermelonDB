//
//
//

import React from "react";
import db, { Lists_DB, Translations_DB, Vocabs_DB } from "../..";

import { List_MODEL, Translation_MODEL, Vocab_MODEL } from "../../models";

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

    // Create translations and link them to the new vocab
    // for (const incomingTR of incomingVocab.translations) {
    //   await Translations_DB.create((tr) => {
    //     tr.vocab.set(newVocab); // Link the translation to the vocab
    //     tr.lang_id = incomingTR.lang_id;
    //     tr.text = incomingTR.text;
    //   });
    // }
  });
}

// update all vocab properties

// current translation / new translations
// if current is missing in new, delete current
// if new is missing in current, create new
// if new is in current, upadate current
