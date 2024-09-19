//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ICON_difficultyDot, ICON_flag, ICON_X } from "../icons/icons";
import { useEffect, useMemo, useState } from "react";
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
import UPDATE_vocabDifficulty from "@/src/db/actions/vocabs/UPDATE_vocabDifficulty";
import RENDER_textWithHighlights from "../RENDER_textWithHighlights/RENDER_textWithHighlights";
import Vocab_FRONT from "./components/Vocab_FRONT/Vocab_FRONT";

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
    frontLangId: string;
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
  const [SHOW_difficultyEdits, TOGGLE_difficultyEdits] = useToggle(false);
  const { image, listName, desc, flags, difficulty, frontLangId } =
    displayProps;

  function HANDLE_editDifficulty(difficulty: 1 | 2 | 3) {
    if (vocab.difficulty !== difficulty) {
      UPDATE_vocabDifficulty({ vocab, difficulty });
      TOGGLE_difficultyEdits();
    }
  }

  const frontText =
    translations?.find((tr) => tr.lang_id === frontLangId)?.text ||
    translations[0]?.text;

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

        <Vocab_FRONT
          visible={!open}
          frontText={frontText}
          listName={selected_LIST.name}
          description={vocab.description}
          difficulty={vocab.difficulty}
          flags="flags"
          SHOW_image={image}
          SHOW_listName={listName}
          SHOW_description={desc}
          SHOW_difficulty={difficulty}
          SHOW_flags={flags}
          onPress={TOGGLE_vocab}
        />
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
                <RENDER_textWithHighlights
                  text={tr.text}
                  highlights={tr.highlights}
                  difficulty={vocab.difficulty}
                />
              </Styled_TEXT>
            </View>
          ))}
          <View style={s.bottomText_WRAP}>
            <Styled_TEXT type="label_small">{list.name}</Styled_TEXT>
            <Styled_TEXT type="label_small">{vocab.description}</Styled_TEXT>
          </View>
          <View
            style={{
              padding: 12,
            }}
          >
            {!SHOW_difficultyEdits && (
              <View style={{ flexDirection: "row", gap: 8 }}>
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
                  onPress={TOGGLE_difficultyEdits}
                  iconLeft={
                    <ICON_difficultyDot
                      difficulty={vocab.difficulty}
                      big={true}
                    />
                  }
                />
              </View>
            )}
            {SHOW_difficultyEdits && (
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Btn
                  type={
                    vocab.difficulty === 1 ? "difficulty_1_active" : "simple"
                  }
                  style={{ flex: 1 }}
                  onPress={() => HANDLE_editDifficulty(1)}
                  iconLeft={<ICON_difficultyDot difficulty={1} big={true} />}
                />

                <Btn
                  type={
                    vocab.difficulty === 2 ? "difficulty_2_active" : "simple"
                  }
                  style={{ flex: 1 }}
                  onPress={() => HANDLE_editDifficulty(2)}
                  iconLeft={<ICON_difficultyDot difficulty={2} big={true} />}
                />

                <Btn
                  type={
                    vocab.difficulty === 3 ? "difficulty_3_active" : "simple"
                  }
                  style={{ flex: 1 }}
                  onPress={() => HANDLE_editDifficulty(3)}
                  iconLeft={<ICON_difficultyDot difficulty={3} big={true} />}
                />
                <Btn
                  type="simple"
                  onPress={TOGGLE_difficultyEdits}
                  iconLeft={<ICON_X big={true} rotate={true} />}
                />
              </View>
            )}
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

    translations: vocab.translations, // why isnt it reloading when the translations update?
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
});
