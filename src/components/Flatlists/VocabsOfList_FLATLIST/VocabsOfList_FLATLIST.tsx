//
//
//

import { List_MODEL, Vocab_MODEL } from "@/src/db/models";
import VocabList_BTN from "../../vocabList_BTN/vocabList_BTN";
import Styled_FLATLIST from "../Styled_FLATLIST/Styled_FLATLIST";
import React, { useEffect, useState } from "react";
import db, { Lists_DB, Vocabs_DB } from "@/src/db";
import { Styled_TEXT } from "../../Styled_TEXT";

import { withObservables } from "@nozbe/watermelondb/react";
import Btn from "../../btn/btn";
import { ICON_X } from "../../icons/icons";
import Vocab from "../../Vocab/Vocab";
import { View } from "react-native";
import { Q } from "@nozbe/watermelondb";

function VocabsOfList_FLATLIST({
  vocabs,
  displayProps,
  selectedList_ID,
}: {
  vocabs: Vocab_MODEL[];
  displayProps: {
    SHOW_image: boolean;
    SHOW_listName: boolean;
    SHOW_desc: boolean;
    SHOW_flags: boolean;
    SHOW_difficulty: boolean;
  };
  selectedList_ID: string;
}) {
  return (
    <Styled_FLATLIST
      data={vocabs}
      renderItem={({ item }) => (
        <View>
          <Vocab vocab={item} displayProps={displayProps} />
          <Styled_TEXT>list id is: {item.list_id}</Styled_TEXT>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const enhance = withObservables(["selectedList_ID"], ({ selectedList_ID }) => ({
  // vocabs: Vocabs_DB.query(),

  vocabs: Vocabs_DB.query(
    Q.where("list_id", selectedList_ID) // Filter vocabs where "list_id" matches selectedList_ID
  ),
}));

const ObservedVocabsOfList_FLATLIST = enhance(VocabsOfList_FLATLIST);
export default ObservedVocabsOfList_FLATLIST;
