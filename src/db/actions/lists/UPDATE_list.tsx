//
//
//

import db, { Lists_DB } from "../..";
import { List_MODEL } from "../../models";

export default async function UPDATE_list(
  id: string,
  updates: Partial<List_MODEL>
) {
  await db.write(async () => {
    const list = await Lists_DB.find(id);

    if (list) {
      await list.update(() => {
        Object.assign(list, updates);
        list.updated_at = Date.now();
      });
    }
  });
}
