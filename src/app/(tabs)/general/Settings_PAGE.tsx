//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";

import { ICON_3dots, ICON_arrow } from "@/src/components/icons/icons";

import React from "react";
import { StyleSheet } from "react-native";

import { router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";

export default function Settings_PAGE() {
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
      <Styled_TEXT>Email</Styled_TEXT>
      <Styled_TEXT>Password</Styled_TEXT>
      <Styled_TEXT>Language toggle</Styled_TEXT>
      <Styled_TEXT>SHOW_vocabDeleteConfirmation</Styled_TEXT>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
