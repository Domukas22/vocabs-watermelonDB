//
//
//

import { TranslationCreation_PROPS } from "@/src/db/models";
import languages, { languagesArr_PROPS } from "@/src/constants/languages";
import Input_WRAP from "../../Input_WRAP";
import { ICON_flag } from "@/src/components/icons/icons";
import Btn from "@/src/components/btn/btn";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import { MyColors } from "@/src/constants/MyColors";

interface VocabTranslationInputs_PROPS {
  translations: TranslationCreation_PROPS[] | null;
  EDIT_tr: ({ lang_id, newText }: { lang_id: string; newText: string }) => void;
  HANLDE_trTextModal: ({
    open,
    lang_id,
  }: {
    open: boolean;
    lang_id: string;
  }) => void;
  HANLDE_trhighlightsModal: ({
    open,
    lang_id,
  }: {
    open: boolean;
    lang_id: string;
  }) => void;
  difficulty: 1 | 2 | 3;
}

export default function VocabTranslation_INPUTS({
  translations,
  HANLDE_trTextModal,
  HANLDE_trhighlightsModal,
  difficulty,
}: VocabTranslationInputs_PROPS) {
  if (!translations || !languages) return <></>;

  return translations?.map((tr: TranslationCreation_PROPS) => {
    const lang = languages[tr?.lang_id] ? languages[tr?.lang_id] : null;
    if (!lang) return <></>;

    return (
      <Input_WRAP
        key={lang?.id}
        labelIcon={<ICON_flag lang={tr?.lang_id} />}
        label={`${lang?.lang?.en} translation *`}
        styles={{ padding: 20 }}
      >
        <Pressable
          style={({ pressed }) => [s.textBtn, pressed && s.textBtnPress]}
          onPress={() => HANLDE_trTextModal({ open: true, lang_id: lang.id })}
        >
          <RENDER_textWithHighlights
            text={tr.text}
            highlights={tr.highlights}
            difficulty={difficulty}
          />
          {/* <Styled_TEXT>{tr.text}</Styled_TEXT> */}
        </Pressable>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Btn text="Remove" type="seethrough" onPress={() => {}} />
          <Btn
            text="Edit highlights"
            type="seethrough"
            onPress={() =>
              HANLDE_trhighlightsModal({ open: true, lang_id: lang.id })
            }
            style={{ flex: 1 }}
          />
        </View>
        <Styled_TEXT>Highlights: {tr.highlights}</Styled_TEXT>
      </Input_WRAP>
    );
  });
}

const s = StyleSheet.create({
  textBtn: {
    minHeight: 100,

    paddingHorizontal: 16,
    paddingVertical: 12,

    backgroundColor: MyColors.btn_2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: MyColors.border_white_005,
  },
  textBtnPress: {
    backgroundColor: MyColors.btn_3,
  },
});

function RENDER_textWithHighlights({
  text,
  highlights,
  difficulty,
}: {
  text: string;
  highlights: string;
  difficulty: 1 | 2 | 3;
}) {
  const highlightedIndexes = highlights
    .split(",")
    .map((i) => parseInt(i, 10))
    .filter((i) => !isNaN(i)); // Make sure to filter out invalid numbers

  const highlightTextColor =
    difficulty === 3
      ? MyColors.text_difficulty_3
      : difficulty === 2
      ? MyColors.text_difficulty_2
      : MyColors.text_difficulty_1;

  console.log(difficulty);

  const textDecorationLine = difficulty === 1 ? "line-through" : undefined;

  return (
    <Styled_TEXT>
      {text.split("").map((letter, index) => {
        const isHighlighted = highlightedIndexes.includes(index);
        return (
          <Styled_TEXT
            key={index}
            style={[
              isHighlighted && { color: highlightTextColor },
              isHighlighted && difficulty === 1 && { textDecorationLine },
            ]}
            // style={[
            //   isHighlighted && { color },
            //   difficulty === 1 && { textDecorationLine: "underline" },
            // ]}
          >
            {letter}
          </Styled_TEXT>
        );
      })}
    </Styled_TEXT>
  );
}
