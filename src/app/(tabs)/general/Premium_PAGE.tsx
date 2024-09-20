//
//
//

import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";

import {
  ICON_3dots,
  ICON_arrow,
  ICON_checkmark,
  ICON_premium,
} from "@/src/components/icons/icons";

import React from "react";
import { StyleSheet, View } from "react-native";

import { Link, router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";
import { MyColors } from "@/src/constants/MyColors";
import { ScrollView } from "react-native";

export default function Billing_PAGE() {
  const hasPremium = false;

  return (
    <MainScreen_VIEW>
      <Header
        title={"Premium"}
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
      <ScrollView>
        {!hasPremium && (
          <Input_WRAP>
            <Styled_TEXT type="text_28_bold">Get unlimited vocabs</Styled_TEXT>
            <Styled_TEXT>
              With just a tiny, one-time payment, you'll be able to create an
              infinite amout of vocabs and enjoy everything this sexy app has to
              offer.
            </Styled_TEXT>
            <Styled_TEXT>
              On top of that, you'll support a{" "}
              <Link href={"/(tabs)/general/About_PAGE"}>
                <Styled_TEXT style={{ color: MyColors.text_primary }}>
                  student
                </Styled_TEXT>
              </Link>{" "}
              who is trying to pay the bills and make cool stuff.
            </Styled_TEXT>

            <Btn
              text="Get premium for €4.99"
              type="action"
              style={{ marginTop: 12 }}
            />
          </Input_WRAP>
        )}
        {hasPremium && (
          <>
            <Input_WRAP row={true}>
              <View style={{ flex: 1 }}>
                <Styled_TEXT type="text_22_bold">
                  Your account is premium
                </Styled_TEXT>
                <Styled_TEXT>email2gmail.com</Styled_TEXT>
              </View>
              <View
                style={{
                  marginTop: 4,
                }}
              >
                <ICON_checkmark />
              </View>
            </Input_WRAP>
            <Input_WRAP>
              <Styled_TEXT type="text_18_bold">Payment date:</Styled_TEXT>
              <Styled_TEXT>17. September, 2024</Styled_TEXT>
            </Input_WRAP>
            <Input_WRAP>
              <Styled_TEXT type="text_18_bold">Payment amount:</Styled_TEXT>
              <Styled_TEXT>€4.99</Styled_TEXT>
            </Input_WRAP>
            <Input_WRAP>
              <Styled_TEXT type="text_18_bold">Payment type:</Styled_TEXT>
              <Styled_TEXT>PayPal</Styled_TEXT>
            </Input_WRAP>
            <Input_WRAP>
              <Styled_TEXT style={{ marginTop: 8 }}>
                Thanks for supporting us! If you have any questions or ideas,
                feel free to{" "}
                <Link href={"/(tabs)/general/Contact_PAGE"}>
                  <Styled_TEXT style={{ color: MyColors.text_primary }}>
                    send us a message
                  </Styled_TEXT>
                </Link>
                .
              </Styled_TEXT>
            </Input_WRAP>
          </>
        )}
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
