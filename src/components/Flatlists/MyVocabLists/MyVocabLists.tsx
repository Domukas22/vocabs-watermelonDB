//
//
//

import { List_MODEL, NormalList_MODEL, Vocab_MODEL } from "@/src/db/models";
import MyList_BTN from "../../MyList_BTN/MyList_BTN";
import Styled_FLATLIST from "../Styled_FLATLIST/Styled_FLATLIST";
import React, { useEffect, useState } from "react";
import db, { Lists_DB, Vocabs_DB } from "@/src/db";
import { Styled_TEXT } from "../../Styled_TEXT";

import { withObservables } from "@nozbe/watermelondb/react";
import Btn from "../../btn/btn";
import { ICON_X } from "../../icons/icons";
import FETCH_listsWithVocabs from "@/src/db/actions/lists/FETCH_listsWithVocabs";
import useListsWithVocabs from "@/src/db/actions/lists/FETCH_listsWithVocabs";
import { View } from "react-native";
import FETCH_myVocabLists from "@/src/db/actions/lists/FETCH_lists";
import { Q } from "@nozbe/watermelondb";
import { CreateVocab_PROPS } from "@/src/db/actions/vocabs/CREATE_vocab";
import { combineLatest, switchMap } from "rxjs";
import { user_id } from "@/src/constants/globalTemporary";

interface MyVocabLists_PROPS {
  lists: List_MODEL[];
  footerBtn: React.ReactNode;
  onPress: ({ id, name }: { id: string; name: string }) => void;
}

function _MyVocabLists({ lists, footerBtn, onPress }: MyVocabLists_PROPS) {
  return (
    <Styled_FLATLIST
      data={lists}
      renderItem={({ item }: { item: List_MODEL }) => (
        <View>
          <MyList_BTN
            list={item}
            onPress={() => onPress({ id: item.id, name: item.name })}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
      ListFooterComponent={footerBtn && footerBtn}
    />
  );
}

const enhance = withObservables(
  ["lists"],
  ({ lists }: { lists: List_MODEL[] }) => ({
    lists: Lists_DB.query(Q.where("user_id", user_id)),
    // vocabs: Vocabs_DB,
    // vocabs,
  })
);

const MyVocabLists = enhance(_MyVocabLists);
export default MyVocabLists;
