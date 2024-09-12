//
//
//
//

import { Pressable, StyleSheet, View } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";

import { List_MODEL } from "@/src/db/models";
import { MyColors } from "@/src/constants/MyColors";
import { ICON_difficultyDot } from "../icons/icons";

export default function VocabList_BTN({
  list,
  onPress,
}: {
  list: List_MODEL;
  onPress: () => void;
}) {
  const { user_id, name } = list; // Destructure from the actual List_MODEL

  return (
    <Pressable
      style={({ pressed }) => [s.btn, pressed && s.pressed]}
      onPress={onPress}
    >
      <Styled_TEXT type="text_18_bold" style={{ textAlign: "left" }}>
        {name}
      </Styled_TEXT>
      <Styled_TEXT type="label_small" style={{ textAlign: "left" }}>
        0 vocabs
      </Styled_TEXT>
      <View
        style={{ flexDirection: "row", gap: 8, justifyContent: "flex-end" }}
      >
        <VocabDifficultyCount count={3} difficulty={1} />
        <VocabDifficultyCount count={11} difficulty={2} />
        <VocabDifficultyCount count={42} difficulty={3} />
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: MyColors.border_white_005,
    backgroundColor: MyColors.btn_2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minHeight: 44,
    borderRadius: 12,
    gap: 2,
  },
  pressed: {
    backgroundColor: MyColors.btn_3,
  },
});

function VocabDifficultyCount({
  count,
  difficulty,
}: {
  count: number;
  difficulty: 1 | 2 | 3;
}) {
  const textColor = {
    color:
      difficulty === 3
        ? MyColors.text_difficulty_3
        : difficulty === 2
        ? MyColors.text_difficulty_2
        : MyColors.text_difficulty_1,
  };

  return (
    <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
      <ICON_difficultyDot big={true} difficulty={difficulty} />
      <View>
        <Styled_TEXT type="text_15_bold" style={textColor}>
          {count}
        </Styled_TEXT>
      </View>
    </View>
  );
}
