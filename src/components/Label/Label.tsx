//
//
//

import { View } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";
import React from "react";

interface Label_PROPS {
  labelIcon?: React.ReactNode;
  labelText: string;
}

export default function Label({
  labelIcon,
  labelText = "A nice label",
}: Label_PROPS) {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      {labelIcon && labelIcon}
      <Styled_TEXT type="label" style={{ flex: 1 }}>
        {labelText}
      </Styled_TEXT>
    </View>
  );
}
