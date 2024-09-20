//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";

import {
  ICON_3dots,
  ICON_arrow,
  ICON_flag,
} from "@/src/components/icons/icons";

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";
import Settings_TOGGLE from "@/src/components/Settings_TOGGLE/Settings_TOGGLE";

export default function Settings_PAGE() {
  const [appLang, SET_appLang] = useState("en");

  return (
    <MainScreen_VIEW>
      <Header
        title={"Settings"}
        btnLeft={
          <Btn
            type="seethrough"
            iconLeft={<ICON_arrow />}
            onPress={() => router.back()}
            style={{ borderRadius: 100 }}
          />
        }
        btnRight={
          <Btn
            type="seethrough"
            iconLeft={<ICON_3dots />}
            onPress={() => {}}
            style={{ opacity: 0, pointerEvents: "none" }}
          />
        }
      />
      <Input_WRAP
        row={true}
        styles={{ position: "relative", alignItems: "flex-start" }}
      >
        <View style={{ flex: 1 }}>
          <Styled_TEXT type="text_18_bold">Email</Styled_TEXT>
          <Styled_TEXT>email@gmail.com</Styled_TEXT>
        </View>
        <Btn text="Edit" />
      </Input_WRAP>
      <Input_WRAP styles={{ gap: 12 }}>
        <Styled_TEXT type="text_18_bold">In-app language</Styled_TEXT>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Btn
            text="English"
            iconRight={<ICON_flag lang="en" />}
            style={{ flex: 1 }}
            text_STYLES={{ flex: 1 }}
            type={appLang === "en" ? "active" : "simple"}
            onPress={() => SET_appLang("en")}
          />
          <Btn
            text="German"
            iconRight={<ICON_flag lang="de" />}
            style={{ flex: 1 }}
            text_STYLES={{ flex: 1 }}
            type={appLang === "de" ? "active" : "simple"}
            onPress={() => SET_appLang("de")}
          />
        </View>
      </Input_WRAP>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
