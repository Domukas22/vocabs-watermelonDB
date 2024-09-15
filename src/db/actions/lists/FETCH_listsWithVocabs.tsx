//
//
//

import { Q } from "@nozbe/watermelondb";
import { Lists_DB, Vocabs_DB } from "../..";
import { List_MODEL, Vocab_MODEL } from "../../models";
import { useDatabase, withObservables } from "@nozbe/watermelondb/react";
import { Observable, switchMap } from "@nozbe/watermelondb/utils/rx";
import { useMemo } from "react";

type ListWithVocabs = {
  id: string;
  name: string;
  user: string;
  created_at: number;
  updated_at: number;
  vocabCount: number;
};

export default async function FETCH_listsWithVocabs({
  user,
  id,
}: {
  user: string;
  id?: string;
}) {
  if (!user) {
    console.warn(
      "Provide a user to use 'FETCH_listsWithVocabs'. Returned empty []."
    );
    return Lists_DB.query(Q.where("user", "invalid_user")); // Return a dummy query for safe handling
  }

  let query = Lists_DB.query(Q.where("user", user));
  if (id) query = query.extend(Q.where("id", id));
  const lists = await query.fetch(); // Fetch the lists first

  // Fetch vocabs for each list
  const listsWithVocabs = await Promise.all(
    lists.map(async (list: List_MODEL) => {
      const vocabs = await Vocabs_DB.query(Q.where("list_id", list.id)).fetch(); // Fetch vocabs for each list
      return { ...list, vocabs };
    })
  );

  return listsWithVocabs; // Return the combined result
}
// export default async function FETCH_listsWithVocabs({
//   user,
//   id,
// }: {
//   user: string;
//   id?: string;
// }) {
//   if (!user) {
//     console.warn(
//       "Provide a user to use 'FETCH_listsWithVocabs'. Returned empty []."
//     );
//     return Lists_DB.query(Q.where("user", "invalid_user")); // Return a dummy query for safe handling
//   }

//   let query = Lists_DB.query(Q.where("user", user));
//   if (id) query = query.extend(Q.where("id", id));
//   const lists = await query.fetch(); // Fetch the lists first

//   // Fetch vocabs for each list
//   const listsWithVocabs = await Promise.all(
//     lists.map(async (list: List_MODEL) => {
//       const vocabs = await Vocabs_DB.query(Q.where("list_id", list.id)).fetch(); // Fetch vocabs for each list
//       return { ...list, vocabs };
//     })
//   );

//   return listsWithVocabs; // Return the combined result
// }
