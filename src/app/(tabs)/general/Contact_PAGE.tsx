//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";

import { ICON_3dots, ICON_arrow } from "@/src/components/icons/icons";

import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import { Link, router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import { MyColors } from "@/src/constants/MyColors";

export default function Contact_PAGE() {
  const [message, SET_message] = useState("");
  const [name, SET_name] = useState("");
  const [email, SET_email] = useState("");

  return (
    <MainScreen_VIEW>
      <Header
        title={"Contact us"}
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

      <Input_WRAP label="What's on your mind?">
        <StyledTextInput
          multiline={true}
          value={message}
          SET_value={SET_message}
          placeholder="Enter your message here..."
        />
      </Input_WRAP>
      <Input_WRAP label="What is your name?">
        <StyledTextInput
          value={name}
          SET_value={SET_name}
          placeholder="I'm Batman..."
        />
      </Input_WRAP>
      <Input_WRAP label="What E-mail can we reach you at?">
        <StyledTextInput
          value={email}
          SET_value={SET_email}
          placeholder="email@gmail.com..."
        />
      </Input_WRAP>

      <Input_WRAP>
        <Btn text="Send my message" type="action" />
      </Input_WRAP>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: MyColors.border_white_005,
        }}
      >
        <Styled_TEXT type="text_18_bold">Your message will reach:</Styled_TEXT>
        <Styled_TEXT type="text_18_light">Domas Sirbike</Styled_TEXT>
        <Styled_TEXT type="text_18_light">domassirbike@gmail.com</Styled_TEXT>
        <Link href={"/(tabs)/general/About_PAGE"}>
          <Styled_TEXT style={{ color: MyColors.text_primary }}>
            About me
          </Styled_TEXT>
        </Link>
      </View>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
