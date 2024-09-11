//
//
//

import { MyColors } from "@/src/constants/MyColors";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen_VIEW({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SafeAreaView style={s.MainScreen_VIEW}>{children}</SafeAreaView>;
}

const s = StyleSheet.create({
  MainScreen_VIEW: {
    backgroundColor: MyColors.fill_bg,
    flex: 1,
  },
});
