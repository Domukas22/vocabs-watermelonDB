//
//
//

import { List_MODEL } from "@/src/db/models";
import VocabList_BTN from "../../vocabList_BTN/vocabList_BTN";
import Styled_FLATLIST from "../Styled_FLATLIST/Styled_FLATLIST";
import React, { useEffect, useState } from "react";
import db, { Lists_DB } from "@/src/db";
import { Styled_TEXT } from "../../Styled_TEXT";

import { withObservables } from "@nozbe/watermelondb/react";
import Btn from "../../btn/btn";
import { ICON_X } from "../../icons/icons";
import FETCH_lists from "@/src/db/actions/lists/FETCH_lists";

function MyLists_FLATLIST({
  lists,
  footerBtn = (
    <Btn
      text="Create a new..."
      iconLeft={<ICON_X color="primary" />}
      type="seethrough_primary"
    />
  ),
  onPress,
}: {
  lists: List_MODEL[];
  footerBtn: React.ReactNode;
  onPress: ({ id, name }: { id: string; name: string }) => void;
}) {
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
        <VocabList_BTN
          list={item}
          onPress={() => onPress({ id: item.id, name: item.name })}
        /> // Pass item, not item._raw
      )}
      keyExtractor={(item) => item.name}
      ListFooterComponent={footerBtn}
    />
  );
}

const enhance = withObservables([], () => ({
  lists: FETCH_lists() || [], // quiry.observe() is set by defualt, you dont need ot mention it
  // the query.fetch() fetches one time, and the query.observe() observese
  // .. but it needs ot be wrapped but the "withObservables"
}));

const ObservedLists_FLATLIST = enhance(MyLists_FLATLIST);
export default ObservedLists_FLATLIST;
