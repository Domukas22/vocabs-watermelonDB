//
//
//

import { Q } from "@nozbe/watermelondb";
import db, { Vocabs_DB, Translations_DB, Highlights_DB } from "../..";

export default async function DELETE_vocab(vocabId: string) {
  await db.write(async () => {
    // find target vocab
    // find translations that point to that vocab
    // find the highlights of each vocab
    // delete each highlight
    // Delete the translation itself
    // Delete the vocab itself

    const vocab = await Vocabs_DB.find(vocabId);

    if (vocab) {
      const vocabTranslations = await Translations_DB.query(
        Q.where("vocab_id", vocabId)
      );

      for (const translation of vocabTranslations) {
        const highlights = await Highlights_DB.query(
          Q.where("translation_id", translation.id)
        );

        for (const highlight of highlights) {
          await highlight.markAsDeleted();
        }

        await translation.markAsDeleted();
      }

      await vocab.markAsDeleted();
    }
  });
}
