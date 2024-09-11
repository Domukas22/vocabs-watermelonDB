//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ICON_difficultyDot, ICON_flag } from "../icons/icons";
import { useState } from "react";
import Btn from "../btn/btn";
import { Styled_TEXT } from "../Styled_TEXT";

interface VocabProps {
  listName: string;
  listID: string;
  id: string;
  difficulty: 1 | 2 | 3;
  image: string;
  description: string;
  translations: {
    lang: "en" | "de" | "lt";
    text: string;
    highlights: {
      startIndex: number;
      endIndex: number;
    }[];
  }[];
  displayProps: {
    SHOW_image: boolean;
    SHOW_listName: boolean;
    SHOW_desc: boolean;
    SHOW_flags: boolean;
    SHOW_difficulty: boolean;
  };
}

export default function Vocab(content: VocabProps) {
  const [open, SET_open] = useState(false);
  const { SHOW_image, SHOW_listName, SHOW_desc, SHOW_flags, SHOW_difficulty } =
    content.displayProps;

  function HANDLE_editVocab() {}
  function TOGGLE_vocab() {
    SET_open(!open);
  }
  function HANDLE_editDifficulty() {}

  return (
    <View
      style={[
        s.vocab,
        open && s.vocab_open,
        open && content.difficulty === 1 && s.vocab_open_difficulty_1,
        open && content.difficulty === 2 && s.vocab_open_difficulty_2,
        open && content.difficulty === 3 && s.vocab_open_difficulty_3,
      ]}
    >
      <View>
        {/* Image comes here */}
        {!open && (
          <View>
            <Pressable
              style={({ pressed }) => [
                s.topPadding,
                pressed
                  ? { backgroundColor: MyColors.btn_3 }
                  : { backgroundColor: MyColors.btn_2 }, // Pressed and non-pressed styles
              ]}
              onPress={TOGGLE_vocab}
            >
              <Styled_TEXT type="vocabTitle">
                {content.translations.find((x) => x.lang === "en")?.text ||
                  "title"}
              </Styled_TEXT>

              {SHOW_listName && (
                <Styled_TEXT type="label_small">{content.listName}</Styled_TEXT>
              )}
              {SHOW_desc && (
                <Styled_TEXT type="label_small">
                  {content.description}
                </Styled_TEXT>
              )}
              {(SHOW_flags || SHOW_difficulty) && (
                <View style={s.topIconWrap}>
                  {SHOW_flags &&
                    content.translations.map((tr) => (
                      <ICON_flag
                        key={content.id + "/" + tr.lang}
                        lang={tr.lang}
                      />
                    ))}
                  {SHOW_difficulty && (
                    <ICON_difficultyDot difficulty={content.difficulty} />
                  )}
                </View>
              )}
            </Pressable>
          </View>
        )}
      </View>
      {open && (
        <View>
          {content.translations.map((tr) => (
            <View key={tr.text + content.id} style={s.bottomTr}>
              <View style={s.bottomVocabFlag_WRAP}>
                <ICON_flag key={content.id + "/" + tr.lang} lang={tr.lang} />
              </View>
              <Styled_TEXT
                type="vocabTitle"
                style={{ paddingVertical: 16, flex: 1 }}
              >
                {tr.text}
              </Styled_TEXT>
            </View>
          ))}
          <View style={s.bottomText_WRAP}>
            <Styled_TEXT type="label_small">{content.listName}</Styled_TEXT>
            <Styled_TEXT type="label_small">{content.description}</Styled_TEXT>
          </View>
          <View style={s.bottomBtn_WRAP}>
            <Btn
              type="simple"
              style={{ flex: 1 }}
              onPress={HANDLE_editVocab}
              text="Edit vocab"
              text_STYLES={{ textAlign: "center" }}
            />

            <Btn type="simple" onPress={TOGGLE_vocab} text="Close" />

            <Btn
              type="simple"
              onPress={HANDLE_editDifficulty}
              iconLeft={
                <ICON_difficultyDot
                  difficulty={content.difficulty}
                  big={true}
                />
              }
            />
          </View>
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  vocab: {
    borderRadius: 12,
    backgroundColor: MyColors.btn_2,
    borderWidth: 1,
    borderColor: MyColors.border_white_005,
    overflow: "hidden",
  },
  vocab_open: {
    backgroundColor: MyColors.fill_bg,
  },
  vocab_open_difficulty_3: {
    borderColor: MyColors.border_difficulty_3,
  },
  vocab_open_difficulty_2: {
    borderColor: MyColors.border_difficulty_2,
  },
  vocab_open_difficulty_1: {
    borderColor: MyColors.border_difficulty_1,
  },

  vocab_TITLE: {
    fontSize: 18,
    color: MyColors.text_white,
    fontWeight: "500",
    paddingBottom: 2,
  },
  vocab_SUBTITLE: {
    fontSize: 16,
    color: MyColors.text_white_06,
    fontWeight: "300",
    paddingBottom: 2,
  },
  topPadding: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  topIconWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
    marginTop: 4,
  },
  bottomTr: {
    flexDirection: "row",
    minHeight: 60,
    borderBottomWidth: 1,
    borderColor: MyColors.border_white_005,
  },
  bottomVocabFlag_WRAP: {
    justifyContent: "center",
    alignItems: "center",
    height: 58,
    width: 50,
  },
  bottomVocab_TITLE: {
    color: MyColors.text_white,
    fontSize: 18,
    fontWeight: 500,
    paddingVertical: 16,
    flex: 1,
  },
  bottomText_WRAP: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: MyColors.border_white_005,
  },
  bottomBtn_WRAP: {
    flexDirection: "row",
    padding: 12,
    gap: 8,
  },
});
