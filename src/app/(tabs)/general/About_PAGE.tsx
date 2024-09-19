//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";

import { ICON_3dots, ICON_arrow } from "@/src/components/icons/icons";

import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import { View } from "react-native";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import { MyColors } from "@/src/constants/MyColors";

export default function About_PAGE() {
  return (
    <MainScreen_VIEW>
      <Header
        title={"About us"}
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
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            paddingVertical: 32,
            alignItems: "center",
            gap: 16,
            borderBottomWidth: 1,
            borderBottomColor: MyColors.border_white_005,
          }}
        >
          <Image
            source={require("@/assets/images/Domas.jpg")}
            style={{ width: 240, height: 240, borderRadius: 300 }}
          />
          <Styled_TEXT type="text_28_bold">👋 Hi, ich bin Domas</Styled_TEXT>
        </View>
        <View
          style={{
            padding: 16,
            gap: 16,
            borderBottomWidth: 1,
            borderBottomColor: MyColors.border_white_005,
          }}
        >
          <Styled_TEXT>
            This is a paragarph This is a paragarph This is a paragarph This is
            a paragarph This is a paragarph This is a paragarph This is a
            paragarph
          </Styled_TEXT>
          <Styled_TEXT>
            This is a paragarph This is a paragarph This is a paragarph This is
            a paragarph This is a paragarph This is a paragarph This is a
            paragarph
          </Styled_TEXT>
          <Styled_TEXT>
            This is a paragarph This is a paragarph This is a paragarph This is
            a paragarph This is a paragarph This is a paragarph This is a
            paragarph
          </Styled_TEXT>
        </View>
        <View
          style={{
            padding: 16,
            gap: 16,
            borderBottomWidth: 1,
            borderBottomColor: MyColors.border_white_005,
          }}
        >
          <Styled_TEXT type="text_22_bold">Want to chat?</Styled_TEXT>
          <Btn
            text="Contact me right now"
            iconRight={<ICON_arrow direction="right" />}
            text_STYLES={{ flex: 1 }}
            onPress={() => router.push("/(tabs)/general/Contact_PAGE")}
          />
        </View>
      </ScrollView>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
