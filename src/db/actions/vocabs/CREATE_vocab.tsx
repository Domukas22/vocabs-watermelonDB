//
//
//

import React from "react";
import db, { Lists_DB, Translations_DB, Vocabs_DB } from "../..";

import {
  List_MODEL,
  Translation_MODEL,
  TranslationCreation_PROPS,
  Vocab_MODEL,
} from "../../models";

export type CreateVocab_PROPS = {
  list: List_MODEL;
  difficulty: 1 | 2 | 3;
  description?: string;
  image?: string;
  is_public?: boolean;
  is_publicly_visible?: boolean;
  translations: TranslationCreation_PROPS[] | null;
};

export default async function CREATE_vocab(content: CreateVocab_PROPS) {
  const {
    list,
    difficulty,
    description,
    image,
    is_public,
    is_publicly_visible,
    translations,
  } = content;
  if (!translations || !list) {
    console.log(
      "🔴 Translations and List must be provided for vocab creation 🔴"
    );
    return;
  }

  await db.write(async () => {
    // Create a new vocab record
    const newVocab = await Vocabs_DB.create((vocab) => {
      vocab.list.set(list);
      vocab.difficulty = difficulty || 3;
      vocab.description = description || "Dummy description";
      vocab.image = image || "";
      vocab.is_public = is_public || false;
      vocab.is_publicly_visible = is_publicly_visible || false;
    });

    // Create translations and link them to the new vocab
    for (const incomingTR of translations) {
      await Translations_DB.create((tr) => {
        tr.vocab.set(newVocab); // Link the translation to the vocab
        tr.lang_id = incomingTR.lang_id;
        tr.text = incomingTR.text;
        tr.highlights = incomingTR.highlights;
      });
    }
  });
}
