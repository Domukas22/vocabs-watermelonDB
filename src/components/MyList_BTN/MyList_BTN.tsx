//
//
//
//

import { Pressable, StyleSheet, View } from "react-native";
import { Styled_TEXT } from "../Styled_TEXT";

import { List_MODEL, NormalList_MODEL, Vocab_MODEL } from "@/src/db/models";
import { MyColors } from "@/src/constants/MyColors";
import { ICON_difficultyDot } from "../icons/icons";
import { useEffect, useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

function _MyList_BTN({
  list,
  vocabs,

  onPress,
}: {
  list: List_MODEL;
  vocabs?: Vocab_MODEL[];

  onPress: () => void;
}) {
  const { name } = list;

  const difficulties = vocabs?.reduce(
    (acc, vocab) => {
      if (vocab.difficulty === 1) acc.difficulty_1 += 1;
      if (vocab.difficulty === 2) acc.difficulty_2 += 1;
      if (vocab.difficulty === 3) acc.difficulty_3 += 1;
      acc.total += 1;
      return acc;
    },
    {
      total: 0,
      difficulty_1: 0,
      difficulty_2: 0,
      difficulty_3: 0,
    }
  );

  return (
    <Pressable
      style={({ pressed }) => [s.btn, pressed && s.pressed]}
      onPress={onPress}
    >
      <Styled_TEXT type="text_18_bold" style={{ textAlign: "left" }}>
        {name}
      </Styled_TEXT>
      <Styled_TEXT type="label_small" style={{ textAlign: "left" }}>
        {vocabs && vocabs?.length > 0
          ? `${vocabs.length} vocabs`
          : "Empty list"}
      </Styled_TEXT>
      <View
        style={{ flexDirection: "row", gap: 8, justifyContent: "flex-end" }}
      >
        {difficulties?.difficulty_1 ? (
          <VocabDifficultyCount
            count={difficulties.difficulty_1}
            difficulty={1}
          />
        ) : null}
        {difficulties?.difficulty_2 ? (
          <VocabDifficultyCount
            count={difficulties.difficulty_2}
            difficulty={2}
          />
        ) : null}
        {difficulties?.difficulty_3 ? (
          <VocabDifficultyCount
            count={difficulties.difficulty_3}
            difficulty={3}
          />
        ) : null}
      </View>
    </Pressable>
  );
}

const enhance = withObservables(["list"], ({ list }: { list: List_MODEL }) => ({
  list,
  vocabs: list.vocabs,
}));

const MyList_BTN = enhance(_MyList_BTN);
export default MyList_BTN;

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
