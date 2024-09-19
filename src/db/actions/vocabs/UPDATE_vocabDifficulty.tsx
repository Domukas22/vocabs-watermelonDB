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
import { Q } from "@nozbe/watermelondb";

export type UpdateVocabDifficulty_PROPS = {
  vocab: Vocab_MODEL;
  difficulty: 1 | 2 | 3;
};

export default async function UPDATE_vocabDifficulty({
  vocab,
  difficulty,
}: UpdateVocabDifficulty_PROPS) {
  await db.write(async () => {
    await vocab.update((vocab: Vocab_MODEL) => {
      vocab.difficulty = difficulty || 3;
    });
  });
}
