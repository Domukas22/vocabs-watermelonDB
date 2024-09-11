//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { useFonts } from "expo-font";
import { useState } from "react";
import { TextStyle } from "react-native";

import {
  View,
  StyleSheet,
  TextInput as R_TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface TextInputProps {
  value: string;
  SET_value: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  multiline?: boolean;
}

export default function StyledTextInput({
  value,
  SET_value,
  placeholder,
  multiline = false,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <R_TextInput
      style={[s.textInput, multiline && { minHeight: 120, height: 120 }]}
      placeholder={placeholder ? placeholder : "A nice placeholder..."}
      multiline={multiline}
      placeholderTextColor={MyColors.text_white_06}
      value={value}
      onChangeText={SET_value}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      scrollEnabled={false}
    />
  );
}

const s = StyleSheet.create({
  textInput: {
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "flex-start",
    fontSize: 18,
    fontFamily: "Nunito-Light",

    backgroundColor: MyColors.btn_2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: MyColors.border_white_005,
    color: MyColors.text_white,
  } as TextStyle,
});
