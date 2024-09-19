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

export default function PrivacyPolicy_PAGE() {
  return (
    <MainScreen_VIEW>
      <Header
        title={"Privacy policy"}
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
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
