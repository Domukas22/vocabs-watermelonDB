//
//
//

import { Q } from "@nozbe/watermelondb";
import db, { Lists_DB, Users_DB } from "../..";

import { List_MODEL } from "../../models";

export default async function CREATE_list({ name }: { name: string }) {
  await db.write(async () => {
    const user = await Users_DB.find("kV62afyfHOkdgZ5V");

    await Lists_DB.create((newList: List_MODEL) => {
      newList.name = name;
      newList.user.set(user);
    });
  });
}
