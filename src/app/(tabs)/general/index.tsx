//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";
import {
  ICON_about,
  ICON_arrow,
  ICON_premium,
  ICON_contact,
  ICON_privacyPolicy,
  ICON_settings,
} from "@/src/components/icons/icons";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";

import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import { MyColors } from "@/src/constants/MyColors";
import { router } from "expo-router";

import { StyleSheet, View } from "react-native";

export default function General_SCREEN() {
  const vocabCount = 89;

  return (
    <MainScreen_VIEW>
      <Header title="General" big={true} />
      <Input_WRAP>
        <View style={{ gap: 16 }}>
          <Styled_TEXT>XX vocabs left until you reach the limit</Styled_TEXT>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Styled_TEXT
              type="text_18_bold"
              style={{
                color: MyColors.text_primary,
              }}
            >
              {vocabCount}
            </Styled_TEXT>
            <View
              style={{
                height: 12,
                flex: 1,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: MyColors.border_white_005,
                backgroundColor: MyColors.btn_3,
                marginTop: 2,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${vocabCount}%`,
                  borderRadius: 50,
                  backgroundColor: MyColors.icon_primary,
                }}
              ></View>
            </View>
            <Styled_TEXT
              type="text_18_bold"
              style={{
                color: MyColors.text_white_06,
              }}
            >
              100
            </Styled_TEXT>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Btn
              text="Learn more"
              onPress={() => router.push("/(tabs)/general/Premium_PAGE")}
            />
            <Btn
              text="Get premium"
              type="action"
              style={{ flex: 1 }}
              onPress={() => {}}
            />
          </View>
        </View>
      </Input_WRAP>

      <Input_WRAP>
        <Btn
          iconLeft={<ICON_settings />}
          text="Settings"
          iconRight={<ICON_arrow direction="right" />}
          onPress={() => router.push("/(tabs)/general/Settings_PAGE")}
          text_STYLES={{ flex: 1, marginLeft: 4 }}
        />
        <Btn
          iconLeft={<ICON_premium />}
          text="Premium"
          iconRight={<ICON_arrow direction="right" />}
          onPress={() => router.push("/(tabs)/general/Premium_PAGE")}
          text_STYLES={{ flex: 1, marginLeft: 4 }}
        />
        <Btn
          iconLeft={<ICON_privacyPolicy />}
          text="Privacy policy"
          iconRight={<ICON_arrow direction="right" />}
          onPress={() => router.push("/(tabs)/general/PrivacyPolicy_PAGE")}
          text_STYLES={{ flex: 1, marginLeft: 4 }}
        />
        <Btn
          iconLeft={<ICON_contact />}
          text="Contact us"
          iconRight={<ICON_arrow direction="right" />}
          onPress={() => router.push("/(tabs)/general/Contact_PAGE")}
          text_STYLES={{ flex: 1, marginLeft: 4 }}
        />
        <Btn
          iconLeft={<ICON_about />}
          text="About us"
          iconRight={<ICON_arrow direction="right" />}
          onPress={() => router.push("/(tabs)/general/About_PAGE")}
          text_STYLES={{ flex: 1, marginLeft: 4 }}
        />
      </Input_WRAP>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({});
