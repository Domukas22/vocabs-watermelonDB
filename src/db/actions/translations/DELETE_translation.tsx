//
//
//

import { Q } from "@nozbe/watermelondb";
import db, { Translations_DB, Highlights_DB } from "../..";

export default async function DELETE_translation(translationId: string) {
  await db.write(async () => {
    // find tr
    // find its highlights
    // delete highlights
    // delete tr

    const translation = await Translations_DB.find(translationId);

    const highlights = await Highlights_DB.query(
      Q.where("translation_id", translation.id)
    );

    for (const highlight of highlights) {
      await highlight.markAsDeleted();
    }

    await translation.markAsDeleted();
  });
}
