//
//
//

import { List_MODEL } from "@/src/models/models";
import VocabList_BTN from "../../vocabList_BTN/vocabList_BTN";
import Styled_FLATLIST from "../Styled_FLATLIST/Styled_FLATLIST";
import { useEffect, useState } from "react";
import db, { Lists_DB } from "@/src/db";
import { Styled_TEXT } from "../../Styled_TEXT";

import { withObservables } from "@nozbe/watermelondb/react";
import Btn from "../../btn/btn";
import { ICON_X } from "../../icons/icons";

function MyLists_FLATLIST({
  lists,
  footerBtn = (
    <Btn
      text="Create a new..."
      iconLeft={<ICON_X color="primary" />}
      type="seethrough_primary"
    />
  ),
}: {
  lists: List_MODEL[];
  footerBtn;
}) {
  // const DELETE_list = async (id: string) => {
  //   await db.write(async () => {
  //     const list = await Lists_DB.find(id);
  //     await list.markAsDeleted();
  //   });

  //   console.log(id);
  // };

  const allVocabsList = {
    id: "all",
    name: "All vocabs",
    user_id: "user_1",
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  return (
    <Styled_FLATLIST
      data={[{ ...allVocabsList }, ...lists]}
      renderItem={({ item }: { item: List_MODEL; index: number }) => (
        <VocabList_BTN list={item} onPress={() => {}} /> // Pass item, not item._raw
      )}
      keyExtractor={(item) => item.name}
      ListFooterComponent={footerBtn}
    />
  );
}

const enhance = withObservables([], () => ({
  lists: Lists_DB.query(), // quiry.observe() is set by defualt, you dont need ot mention it
  // the query.fetch() fetches one time, and the query.observe() observese
  // .. but it needs ot be wrapped but the "withObservables"
}));

const ObservedLists_FLATLIST = enhance(MyLists_FLATLIST);
export default ObservedLists_FLATLIST;
