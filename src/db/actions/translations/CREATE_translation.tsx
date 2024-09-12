//
//
//

import db, { Translations_DB } from "../..";

import { Translation_MODEL } from "../../models";

export default async function CREATE_translation(tr: Translation_MODEL) {
  await db.write(async () => {
    await Translations_DB.create((__tr) => {
      const newTr = __tr as Translation_MODEL;

      newTr.vocab_id = tr.vocab_id; // Set the user ID
      newTr.lang_id = tr.lang_id;
      newTr.text = tr.text;

      newTr.created_at = Date.now(); // Set the creation timestamp
      newTr.updated_at = Date.now(); // Set the updated timestamp
    });
  });
}
