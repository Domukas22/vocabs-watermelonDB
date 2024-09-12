//
//
//

import db, { Lists_DB } from "../..";

import { List_MODEL } from "../../models";

export default async function CREATE_list({ name }: { name: string }) {
  await db.write(async () => {
    await Lists_DB.create((newList: List_MODEL) => {
      newList.user_id = "user_1"; // Set the user ID
      newList.name = name;
      newList.created_at = Date.now(); // Set the creation timestamp
      newList.updated_at = Date.now(); // Set the updated timestamp
    });
  });
}
