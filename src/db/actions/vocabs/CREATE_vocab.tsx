//
//
//

import db, { Lists_DB, Vocabs_DB } from "../..";

import { List_MODEL, Vocab_MODEL } from "../../models";

export default async function CREATE_vocab(vocab: Vocab_MODEL) {
  await db.write(async () => {
    await Vocabs_DB.create((newVocab: Vocab_MODEL) => {
      newVocab.list_id = vocab.list_id;
      newVocab.difficulty = vocab.difficulty || 3;
      newVocab.description = vocab.description || "Dummy description";

      newVocab.image = "";
      newVocab.is_public = false;
      newVocab.is_publicly_visible = false;
      newVocab.created_at = Date.now(); // Set the creation timestamp
      newVocab.updated_at = Date.now(); // Set the updated timestamp
    });
  });
}
