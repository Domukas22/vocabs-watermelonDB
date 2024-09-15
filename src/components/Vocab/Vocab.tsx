//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ICON_difficultyDot, ICON_flag } from "../icons/icons";
import { useState } from "react";
import Btn from "../btn/btn";
import { Styled_TEXT } from "../Styled_TEXT";
import { List_MODEL, Vocab_MODEL } from "@/src/db/models";
import { withObservables } from "@nozbe/watermelondb/react";

interface VocabProps {
  vocab: Vocab_MODEL;
  displayProps: {
    image: boolean;
    listName: boolean;
    desc: boolean;
    flags: boolean;
    difficulty: boolean;
  };
  openEdit: () => void;
  selected_LIST: List_MODEL;
}

function _Vocab({ vocab, displayProps, openEdit, selected_LIST }: VocabProps) {
  const [open, SET_open] = useState(false);
  const { image, listName, desc, flags, difficulty } = displayProps;

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
        open && vocab.difficulty === 1 && s.vocab_open_difficulty_1,
        open && vocab.difficulty === 2 && s.vocab_open_difficulty_2,
        open && vocab.difficulty === 3 && s.vocab_open_difficulty_3,
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
              onPress={openEdit}
            >
              <Styled_TEXT type="vocabTitle">{vocab.description}</Styled_TEXT>

              {listName && (
                <Styled_TEXT type="label_small">
                  {selected_LIST.name}
                </Styled_TEXT>
              )}
              {desc && (
                <Styled_TEXT type="label_small">
                  {vocab.description}
                </Styled_TEXT>
              )}
              {(flags || difficulty) && (
                <View style={s.topIconWrap}>
                  {/* {flags &&
                    content.translations.map((tr) => (
                      <ICON_flag
                        key={content.id + "/" + tr.lang}
                        lang={tr.lang}
                      />
                    ))} */}
                  <Styled_TEXT type="label_small">Flags</Styled_TEXT>
                  {difficulty && (
                    <ICON_difficultyDot difficulty={vocab.difficulty} />
                  )}
                </View>
              )}
            </Pressable>
          </View>
        )}
      </View>
      {/* {open && (
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
      )} */}
    </View>
  );
}
const enhance = withObservables(
  ["vocab"],
  ({ vocab }: { vocab: Vocab_MODEL }) => ({
    vocab,
    translations: vocab.translations,
  })
);

const Vocab = enhance(_Vocab);
export default Vocab;

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
