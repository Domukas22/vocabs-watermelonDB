//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ICON_difficultyDot, ICON_flag } from "../icons/icons";
import { useState } from "react";
import Btn from "../btn/btn";
import { Styled_TEXT } from "../Styled_TEXT";
import {
  List_MODEL,
  Translation_MODEL,
  TranslationCreation_PROPS,
  Vocab_MODEL,
} from "@/src/db/models";
import { withObservables } from "@nozbe/watermelondb/react";
import { useToggle } from "@/src/hooks/useToggle/useToggle";
import languages from "@/src/constants/languages";

interface VocabProps {
  vocab: Vocab_MODEL;
  translations: Translation_MODEL[];
  list: List_MODEL;
  displayProps: {
    image: boolean;
    listName: boolean;
    desc: boolean;
    flags: boolean;
    difficulty: boolean;
  };
  EDIT_vocab: ({
    vocab,
    translations,
  }: {
    vocab: Vocab_MODEL;
    translations: TranslationCreation_PROPS[];
  }) => void;
  selected_LIST: List_MODEL;
}

// TOGGLE_vocabModal needs to also pass in th etranslations, so we dont have to pass them async and get a delayed manageVocabModal update
function _Vocab({
  vocab,
  translations,
  displayProps,
  list,
  EDIT_vocab,
  selected_LIST,
}: VocabProps) {
  const [open, TOGGLE_vocab] = useToggle(false);
  const { image, listName, desc, flags, difficulty } = displayProps;

  function HANDLE_editVocab() {}

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
              onPress={TOGGLE_vocab}
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
      {open && (
        <View>
          {translations.map((tr, index) => (
            <View key={tr.text + vocab.id} style={s.bottomTr}>
              <View style={s.bottomVocabFlag_WRAP}>
                {/* <ICON_flag key={content.id + "/" + tr.lang} lang={tr.lang} /> */}
                <Image
                  style={{
                    width: 24,
                    height: 16,
                    borderRadius: 2,
                    marginRight: 4,
                  }}
                  // source={lang.image}
                  source={languages[tr?.lang_id].image}
                />
              </View>
              <Styled_TEXT
                type="vocabTitle"
                style={{ paddingVertical: 16, flex: 1 }}
              >
                {tr.text}
                {` // h: ${tr.highlights}`}
              </Styled_TEXT>
            </View>
          ))}
          <View style={s.bottomText_WRAP}>
            <Styled_TEXT type="label_small">{list.name}</Styled_TEXT>
            <Styled_TEXT type="label_small">{vocab.description}</Styled_TEXT>
          </View>
          <View style={s.bottomBtn_WRAP}>
            <Btn
              type="simple"
              style={{ flex: 1 }}
              onPress={() => EDIT_vocab({ vocab, translations })}
              text="Edit vocab"
              text_STYLES={{ textAlign: "center" }}
            />

            <Btn type="simple" onPress={TOGGLE_vocab} text="Close" />

            <Btn
              type="simple"
              onPress={HANDLE_editDifficulty}
              iconLeft={
                <ICON_difficultyDot difficulty={vocab.difficulty} big={true} />
              }
            />
          </View>
        </View>
      )}
    </View>
  );
}
const enhance = withObservables(
  ["vocab"],
  ({ vocab }: { vocab: Vocab_MODEL }) => ({
    vocab,
    translations: vocab.translations,
    list: vocab.list,
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
