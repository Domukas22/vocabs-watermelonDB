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
import db, { Lists_DB } from "@/src/db";
import { List_MODEL } from "@/src/models/models";

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

  async function CREATE_list() {
    await db.write(async () => {
      await Lists_DB.create((list) => {
        list.userId = "user_id_1"; // Set the user ID
        list.name = name;
        list.createdAt = Date.now(); // Set the creation timestamp
        list.updatedAt = Date.now(); // Set the updated timestamp
      });

      console.log(`Created list "${name}"`);
    });
  }

  // list.user_id = "user_id_1";
  // list.name = "List 1"

  async function GET_lists() {
    // const listCollection = DB;
    // const lists_COLLECTION = DB.get('lists')

    const lists = await Lists_DB.query().fetch();
    console.log(lists.map((x) => x.name));
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
          <StyledTextInput
            placeholder="id..."
            value={id}
            SET_value={SET_id}
            style={{ flex: 1 }}
          />
          <StyledTextInput
            placeholder="name..."
            value={name}
            SET_value={SET_name}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Btn
            text="Create"
            type="simple"
            onPress={CREATE_list}
            style={{ flex: 1 }}
          />
          <Btn
            text="Read"
            type="simple"
            onPress={GET_lists}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({});
