//
//
//

import { Q } from "@nozbe/watermelondb";
import db, { Vocabs_DB, Translations_DB, Highlights_DB, Lists_DB } from "../..";

export default async function DELETE_list(listId: string) {
  await db.write(async () => {
    // Find the list by its id
    const list = await Lists_DB.find(listId);

    if (list) {
      // Find all vocabs related to this list
      const listVocabs = await Vocabs_DB.query(
        Q.where("list_id", listId)
      ).fetch();

      for (const vocab of listVocabs) {
        // Find all translations related to the vocab
        const vocabTranslations = await Translations_DB.query(
          Q.where("vocab_id", vocab.id)
        ).fetch();

        for (const translation of vocabTranslations) {
          // Find all highlights related to each translation
          const highlights = await Highlights_DB.query(
            Q.where("translation_id", translation.id)
          ).fetch();

          // Delete all highlights related to the translation
          for (const highlight of highlights) {
            await highlight.markAsDeleted();
          }

          // Delete the translation itself
          await translation.markAsDeleted();
        }

        // Delete the vocab itself
        await vocab.markAsDeleted();
      }

      // Delete the list itself
      await list.markAsDeleted();
    }
  });
}
