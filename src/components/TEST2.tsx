import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { RichEditor } from "react-native-pell-rich-editor";
import Btn from "./btn/btn";
import { MyColors } from "../constants/MyColors";

const SimpleRichTextEditor = () => {
  const richText = useRef<RichEditor>(null); // Reference to the RichEditor

  const customCSSText = `
  @font-face {
    font-family: 'Nunito-Bold';
    src: url('../../../assets/fonts/Nunito-Bold.ttf');
  }

  @font-face {
    font-family: 'Nunito-Medium';
    src: url('../../../assets/fonts/Nunito-Medium.ttf');
  }
  body {
    font-family: 'Nunito-Medium';
    font-size: 18px;
  }
  b {
    font-family: 'Nunito-Bold';
    color: red;
    font-size: 25px;
    }
`;

  const handleBold = () => {
    if (richText.current) {
      // Toggle bold styling
      richText.current.commandDOM('document.execCommand("bold", false, "")');

      // Apply or remove color based on the current state
      richText.current.commandDOM(`
        const boldElements = document.querySelectorAll('b');
        boldElements.forEach(el => el.style.color = 'red');
        const divs = document.querySelectorAll('div');
        divs.forEach(el => el.style.backgroundColor = 'red');
        const nonBoldElements = document.querySelectorAll('span');
        nonBoldElements.forEach(el => {
          if (el.style.color === 'red') {
            el.style.color = '';
          }
        });
      `);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            height: 300,
            backgroundColor: "red",
          }}
        >
          <Text style={{ margin: 10 }}>Enter your text below:</Text>
          <RichEditor
            ref={richText}
            style={{
              flex: 1,
              borderColor: MyColors.border_white_005,
              backgroundColor: "blue",
              borderWidth: 1,
              borderRadius: 16,

              overflow: "hidden",
            }}
            placeholder="Start typing..."
            initialCSSText={'font-size: "25px"; background-color: "blue"'} // Add CSS to style bold text
            onChange={(text) => console.log("Editor content:", text)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}
      >
        <Btn type="simple" onPress={handleBold} text="Bold" />
        {/* Add more custom buttons here */}
      </View>
    </SafeAreaView>
  );
};

export default SimpleRichTextEditor;
