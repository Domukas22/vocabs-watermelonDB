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
import Styled_FLATLIST from "@/src/components/Styled_FLATLIST/Styled_FLATLIST";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import VocabList_BTN from "@/src/components/vocabList_BTN/vocabList_BTN";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DUMMY = [
  { id: "id_1", name: "List 1" },
  { id: "id_2", name: "List 2" },
  { id: "id_3", name: "List 3" },
];

export default function Profile_SCREEN() {
  const [id, SET_id] = useState("");
  const [name, SET_name] = useState("");

  function CREATE_list() {
    console.log(`Create "${name}"`);
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
            onPress={() => router.push("/(tabs)/vocabs/list_PAGE")}
            style={{ borderRadius: 100 }}
          />
        }
      />

      <Styled_FLATLIST
        data={DUMMY}
        renderItem={({ item }) => (
          <VocabList_BTN id={item.id} name={item.name} />
        )}
        keyExtractor={(item) => item.name}
      />
      <View style={{ padding: 12 }}>
        <View style={{ flexDirection: "row", marginBottom: 12, gap: 12 }}>
          <StyledTextInput placeholder="id..." value={id} SET_value={SET_id} />
          <StyledTextInput
            placeholder="name..."
            value={name}
            SET_value={SET_name}
          />
        </View>
        <Btn text="Creates" type="simple" onPress={CREATE_list} />
      </View>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({});
