//
//
//

import { View } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";
import Btn from "../btn/btn";
import { MyColors } from "@/src/constants/MyColors";
import React from "react";

interface _Input_WRAP {
  label: string;
  labelIcon?: React.ReactNode;
  row?: boolean;
  children: React.ReactNode;
}

export default function Input_WRAP({
  label = "A nice label",
  labelIcon,
  row = false,
  children,
}: _Input_WRAP) {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 16,
        paddingBottom: 20,
        gap: 8,
        borderBottomWidth: 1,
        borderColor: MyColors.border_white_005,
      }}
    >
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        {labelIcon && labelIcon}
        <Styled_TEXT type="label">{label}</Styled_TEXT>
      </View>
      <View
        style={[
          row ? { flexDirection: "row" } : { flexDirection: "column" },
          { gap: 8 },
        ]}
      >
        {children}
      </View>
    </View>
  );
}
