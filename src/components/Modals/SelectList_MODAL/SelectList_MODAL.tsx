//
//
//

import Btn from "@/src/components/btn/btn";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import { ICON_X } from "@/src/components/icons/icons";

import SearchBar from "@/src/components/SearchBar/SearchBar";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import Subnav from "@/src/components/Subnav/Subnav";

import { MyColors } from "@/src/constants/MyColors";
import React, { useState } from "react";
import { FlatList, Modal, SafeAreaView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Simple_MODAL from "../Simple_MODAL/Simple_MODAL";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import { BlurView } from "expo-blur";

interface SelectListModal_PROPS {
  SHOW_selectListModal: boolean;
  TOGGLE_selectListModal: () => void;
  listID: string;
  SET_listID: React.Dispatch<React.SetStateAction<string>>;
  lists: {
    id: string;
  }[];
}

export default function SelectList_MODAL(props: SelectListModal_PROPS) {
  const {
    SHOW_selectListModal,
    TOGGLE_selectListModal,
    listID,
    SET_listID,
    lists,
  } = props;

  const [search, SET_search] = useState("");
  const [SHOW_createListModal, SET_createListModal] = useState(false);

  const [newListName, SET_newListName] = useState("");

  function TOGGLE_createListModal() {
    SET_newListName("");
    SET_createListModal((prev) => !prev);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={SHOW_selectListModal}
      style={{}}
    >
      <SafeAreaView
        style={{
          backgroundColor: MyColors.fill_bg,

          flex: 1,
        }}
      >
        <Header
          title="Select a list"
          big={true}
          btnRight={
            <Btn
              type="seethrough"
              iconLeft={<ICON_X big={true} rotate={true} />}
              onPress={TOGGLE_selectListModal}
              style={{ borderRadius: 100 }}
            />
          }
        />
        <Subnav>
          <SearchBar value={search} SET_value={SET_search} />
        </Subnav>

        <FlatList
          data={
            search === ""
              ? lists
              : lists.filter((item) =>
                  item.id.toLowerCase().includes(search.toLowerCase())
                )
          }
          ListHeaderComponent={
            <Styled_TEXT type="label" style={{ paddingBottom: 8 }}>
              {search
                ? `5 results for '${search}'`
                : "Select a list for your vocab"}
            </Styled_TEXT>
          }
          ListFooterComponent={
            <Btn
              iconLeft={<ICON_X color="primary" />}
              text="Create a new list"
              onPress={TOGGLE_createListModal}
              type="seethrough_primary"
              style={{ flex: 1 }}
            />
          }
          renderItem={({ item }) => (
            <Btn
              text={item.id}
              onPress={() => {
                SET_listID(item.id);
                SET_search("");
              }}
              type={listID === item.id ? "active" : "simple"}
              style={{ flex: 1, marginBottom: 8 }}
              text_STYLES={{ flex: 1 }}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ padding: 12, flex: 1 }}
        />

        <Footer
          btnLeft={
            <Btn
              text="Done"
              onPress={TOGGLE_selectListModal}
              type="simple"
              style={{ flex: 1 }}
            />
          }
        />
      </SafeAreaView>
      <Simple_MODAL
        {...{
          title: "Create a list",

          IS_open: SHOW_createListModal,
          toggle: TOGGLE_createListModal,
          btnLeft: (
            <Btn text="Cancel" onPress={TOGGLE_createListModal} type="simple" />
          ),
          btnRight: (
            <Btn
              text="Create list"
              onPress={() => {}}
              type="action"
              style={{ flex: 1 }}
            />
          ),
        }}
      >
        <Styled_TEXT type="label">How will the new list be called?</Styled_TEXT>
        <StyledTextInput
          value={newListName}
          SET_value={SET_newListName}
          placeholder="F.e. German school vocabs..."
        />
        <View style={{ flexDirection: "row", gap: 8 }}></View>
      </Simple_MODAL>
    </Modal>
  );
}
