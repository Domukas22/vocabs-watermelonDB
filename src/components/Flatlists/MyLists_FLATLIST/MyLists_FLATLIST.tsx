//
//
//

import { List_MODEL } from "@/src/models/models";
import VocabList_BTN from "../../vocabList_BTN/vocabList_BTN";
import Styled_FLATLIST from "../Styled_FLATLIST/Styled_FLATLIST";
import { useEffect, useState } from "react";
import { Lists_DB } from "@/src/db";
import { Styled_TEXT } from "../../Styled_TEXT";

const DUMMY = [
  { user_id: "user_id_1", name: "List 1" },
  { user_id: "user_id_1", name: "List 2" },
  { user_id: "user_id_1", name: "List 3" },
];

export default function MyLists_FLATLIST() {
  const [lists, SET_lists] = useState([]);

  async function GET_lists() {
    const lists = await Lists_DB.query().fetch();
    console.log(lists.map((x) => x.name));
  }

  useEffect(() => {
    const FETCH_lists = async () => {
      const lists = await Lists_DB.query().fetch();
      SET_lists(lists);
    };
    FETCH_lists();
  }, []);

  return lists.length ? (
    <Styled_FLATLIST
      data={lists}
      renderItem={({ item }, index: string) => (
        <VocabList_BTN id={index} name={item.name} />
      )}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <Styled_TEXT>Loading...</Styled_TEXT>
  );
}
