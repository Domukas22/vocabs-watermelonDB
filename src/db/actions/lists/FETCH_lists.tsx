//
//
//

import { Q } from "@nozbe/watermelondb";
import { Lists_DB, Vocabs_DB } from "../..";

const FETCH_myVocabLists = (userId: string) => {
  return Lists_DB.query(Q.where("user_id", userId));
};

export default FETCH_myVocabLists;
