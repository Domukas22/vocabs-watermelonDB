//
//
//

import db, { Translations_DB } from "../..";
import { Translation_MODEL } from "../../models";

export default async function UPDATE_translation(
  id: string,
  updates: Partial<Translation_MODEL>
) {
  await db.write(async () => {
    const translation = await Translations_DB.find(id);

    if (translation) {
      await translation.update(() => {
        Object.assign(translation, updates);
        translation.updated_at = Date.now();
      });
    }
  });
}
