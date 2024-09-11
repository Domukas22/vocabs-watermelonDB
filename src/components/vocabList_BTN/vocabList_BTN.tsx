//
//
//
//

import { Pressable, StyleSheet } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";

interface VocabListBtn_PROPS {
  id: string;
  name: string;
}

export default function VocabList_BTN(props: VocabListBtn_PROPS) {
  const { id, name } = props;
  return (
    <Pressable>
      <Styled_TEXT type="text_15_semibold">--> {name}</Styled_TEXT>
    </Pressable>
  );
}

const s = StyleSheet.create({
  btn: {},
});
