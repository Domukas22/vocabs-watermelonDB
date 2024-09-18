//
//
//

import { Q } from "@nozbe/watermelondb";
import db, { Lists_DB, Users_DB } from "../..";

import { List_MODEL } from "../../models";
import { user_id } from "@/src/constants/globalTemporary";

export default async function CREATE_list({ name }: { name: string }) {
  console.log("CREATE");

  await db.write(async () => {
    // const user = await Users_DB.query(Q.where("name", "Domas"));
    const user = await Users_DB.find(user_id);

    await Lists_DB.create((newList: List_MODEL) => {
      newList.name = name;
      newList.user.set(user);
    });
  });
}
