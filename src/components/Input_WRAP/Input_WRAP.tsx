//
//
//

import { StyleProp, StyleSheetProperties, View, ViewStyle } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";
import Btn from "../btn/btn";
import { MyColors } from "@/src/constants/MyColors";
import React from "react";
import Label from "../Label/Label";

interface _Input_WRAP {
  label?: string;
  labelIcon?: React.ReactNode;
  row?: boolean;
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export default function Input_WRAP({
  label,
  labelIcon,
  row = false,
  children,
  styles,
}: _Input_WRAP) {
  return (
    <View
      style={[
        {
          paddingHorizontal: 12,
          paddingVertical: 16,
          paddingBottom: 20,
          gap: 8,
          borderBottomWidth: 1,
          borderColor: MyColors.border_white_005,
        },
        { paddingBottom: 20 },
      ]}
    >
      {label && <Label labelIcon={labelIcon} labelText={label} />}
      <View
        style={[
          row ? { flexDirection: "row" } : { flexDirection: "column" },
          { gap: 8 },
          styles,
        ]}
      >
        {children}
      </View>
    </View>
  );
}
