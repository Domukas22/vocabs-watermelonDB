//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";
import {
  ICON_3dots,
  ICON_arrowBack,
  ICON_X,
} from "@/src/components/icons/icons";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import Styled_FLATLIST from "@/src/components/Flatlists/Styled_FLATLIST/Styled_FLATLIST";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import VocabList_BTN from "@/src/components/vocabList_BTN/vocabList_BTN";
import db, { Lists_DB } from "@/src/db";
import { List_MODEL } from "@/src/db/models";

import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MyLists_FLATLIST from "@/src/components/Flatlists/MyLists_FLATLIST/MyLists_FLATLIST";
import ObservedLists_FLATLIST from "@/src/components/Flatlists/MyLists_FLATLIST/MyLists_FLATLIST";
import Simple_MODAL from "@/src/components/Modals/Simple_MODAL/Simple_MODAL";
import { USE_selectedList } from "@/src/context/SelectedList_CONTEXT";
import CREATE_list from "@/src/db/actions/lists/CREATE_list";

export default function Profile_SCREEN() {
  const { SET_SelectedListId, SET_SelectedListName } = USE_selectedList();
  const [newList_NAME, SET_newListName] = useState("");

  const [SHOW_createListModal, SET_createListModal] = useState(false);

  const TOGGLE_createListModal = () => {
    SET_createListModal((prev) => !prev);
  };

  async function DELETE_allLists() {
    await db.write(async () => {
      const lists = await Lists_DB.query().fetch();

      await Promise.all(
        lists.map((item) => {
          // item.markAsDeleted()
          item.destroyPermanently();
        })
      );
    });
  }

  return (
    <MainScreen_VIEW>
      <Header
        title="My vocabs"
        big={true}
        btnRight={
          <Btn
            type="seethrough_primary"
            iconLeft={<ICON_X color="primary" big={true} />}
            onPress={TOGGLE_createListModal}
            style={{ borderRadius: 100 }}
          />
          // <Btn
          //   type="seethrough_primary"
          //   iconLeft={<ICON_X color="primary" big={true} />}
          //   onPress={() => router.push("/(tabs)/vocabs/list_PAGE")}
          //   style={{ borderRadius: 100 }}
          // />
        }
      />

      <ObservedLists_FLATLIST
        footerBtn={
          <Btn
            text="Create a new list"
            iconLeft={<ICON_X color="primary" />}
            type="seethrough_primary"
            onPress={TOGGLE_createListModal}
          />
        }
        onPress={({ id, name }: { id: string; name: string }) => {
          SET_SelectedListId(id);
          SET_SelectedListName(name);
          router.push("/(tabs)/vocabs/list_PAGE");
        }}
      />

      <Btn text="Delelte all" type="simple" onPress={DELETE_allLists} />

      <Simple_MODAL
        title="Create a new list"
        IS_open={SHOW_createListModal}
        toggle={TOGGLE_createListModal}
        btnLeft={
          <Btn
            text="Cancel"
            onPress={() => {
              TOGGLE_createListModal();
              SET_newListName("");
            }}
          />
        }
        btnRight={
          <Btn
            text="Create"
            type="action"
            style={{ flex: 1 }}
            onPress={() => {
              SET_newListName("");
              CREATE_list({ name: newList_NAME });
              TOGGLE_createListModal();
            }}
          />
        }
      >
        <Styled_TEXT type="label">How will the new list be called?</Styled_TEXT>
        <StyledTextInput
          value={newList_NAME}
          SET_value={SET_newListName}
          placeholder="German vocabs..."
        />
      </Simple_MODAL>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({});
