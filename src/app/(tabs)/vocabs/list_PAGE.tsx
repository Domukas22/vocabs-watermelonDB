//
//
//
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import Vocab from "@/src/components/Vocab/Vocab";
import Btn from "@/src/components/btn/btn";
import Header from "@/src/components/Header/Header";
import { Image, Vibration } from "react-native";
import {
  ICON_3dots,
  ICON_arrowBack,
  ICON_calendar,
  ICON_difficultyDot,
  ICON_displaySettings,
  ICON_shuffle,
  ICON_X,
} from "@/src/components/icons/icons";
import { MyColors } from "@/src/constants/MyColors";
import { vocabDummies } from "@/src/constants/dummyVocabs";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { View } from "react-native";
import Footer from "@/src/components/Footer/Footer";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import DisplaySettings_MODAL from "@/src/components/Modals/DisplaySettings_MODAL/DisplaySettings_MODAL";
import Subnav from "@/src/components/Subnav/Subnav";
import ManageVocab_MODAL from "@/src/components/Modals/ManageVocab_MODAL/ManageVocab_MODAL";
import languages from "@/src/constants/languages";
import { Link } from "expo-router";
import { router } from "expo-router";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import Styled_FLATLIST from "@/src/components/Flatlists/Styled_FLATLIST/Styled_FLATLIST";
import { USE_selectedList } from "@/src/context/SelectedList_CONTEXT";
import ListOfVocabs from "@/src/components/Flatlists/Vocabs/Vocabs";
import db, { Vocabs_DB } from "@/src/db";
import {
  List_MODEL,
  Translation_MODEL,
  TranslationCreation_PROPS,
  Vocab_MODEL,
} from "@/src/db/models";
import { Q } from "@nozbe/watermelondb";
import FETCH_vocabs from "@/src/db/actions/vocabs/FETCH_vocabs";
import { useToggle } from "@/src/hooks/useToggle/useToggle";

export default function Home_SCREEN() {
  const { selected_LIST, SET_selectedList } = USE_selectedList();
  const [SHOW_displaySettingsModal, TOGGLE_displaySettings] = useToggle(false);
  const [SHOW_vocabModal, TOGGLE_vocabModal] = useToggle(false);

  const [displayProps, SET_displayProps] = useState({
    search: "",
    sorting: "shuffle",
    image: true,
    listName: true,
    desc: true,
    flags: true,
    difficulty: true,
  });

  const [toEdit_VOCAB, SET_toEditVocab] = useState<Vocab_MODEL | null>(null);
  const [toEdit_TRANSLATIONS, SET_toEditTranslations] = useState<
    TranslationCreation_PROPS[] | null
  >(null);

  function CLOSE_vocabModal() {
    SET_toEditVocab(null);
    SET_toEditTranslations(null);
    TOGGLE_vocabModal();
  }
  function EDIT_vocab({
    vocab,
    translations,
  }: {
    vocab?: Vocab_MODEL;
    translations?: TranslationCreation_PROPS[];
  }) {
    if (vocab && translations) {
      SET_toEditVocab(vocab);
      SET_toEditTranslations(translations);
      TOGGLE_vocabModal();
    }
  }
  function HANDLE_vocabModal({
    clear = false,
    vocab,
    translations,
  }: {
    clear?: boolean;
    vocab?: Vocab_MODEL;
    translations?: TranslationCreation_PROPS[];
  }) {
    if (!clear && vocab && translations) {
      const trs = translations?.map((tr) => ({
        lang_id: tr.lang_id,
        text: tr.text || "",
        highlights: tr.highlights || "",
      }));

      SET_toEditVocab(vocab);
      SET_toEditTranslations(trs);
      TOGGLE_vocabModal();
    } else if (clear) {
      SET_toEditVocab(null);
      SET_toEditTranslations(null);
      TOGGLE_vocabModal();
    }
  }

  async function DELETE_allVocabs() {
    await db.write(async () => {
      const lists = await Vocabs_DB.query().fetch();

      await Promise.all(
        lists.map((item) => {
          // item.markAsDeleted()
          item.destroyPermanently();
        })
      );
    });
  }

  return (
    <MainScreen_VIEW>
      <Header
        title={selected_LIST.name || "none"}
        btnLeft={
          <Btn
            type="seethrough"
            iconLeft={<ICON_arrowBack />}
            onPress={() => router.back()}
            style={{ borderRadius: 100 }}
          />
        }
        btnRight={
          <Btn
            type="seethrough"
            iconLeft={<ICON_3dots />}
            onPress={() => {}}
            style={{ borderRadius: 100 }}
          />
        }
      />

      <Subnav>
        <SearchBar
          value={displayProps.search}
          SET_value={(val) =>
            SET_displayProps((prev) => ({ ...prev, search: val }))
          }
        />
        <Btn
          type="simple"
          iconLeft={<ICON_displaySettings />}
          style={{ borderRadius: 100 }}
          onPress={TOGGLE_displaySettings}
        />
        <Btn
          type="simple"
          iconLeft={<ICON_X big={true} color="primary" />}
          style={{ borderRadius: 100 }}
          onPress={() => HANDLE_vocabModal({ clear: true })}
        />
      </Subnav>

      <ListOfVocabs
        selected_LIST={selected_LIST}
        filters={{
          filter: {
            list_id: selected_LIST.id,
          },
        }}
        EDIT_vocab={HANDLE_vocabModal}
        displayProps={displayProps}
      />

      {/* <DisplaySettings_MODAL
        {...{
          sorting,
          display.desc,
          display.image,
          display.flags,
          display.listName,
          display.difficulty,
          SHOW_displaySettingsModal,
          SET_sorting,
          SET_showDesc,
          SET_showFlags,
          SET_showImage,
          SET_showListName,
          SET_showDifficulty,
          TOGGLE_displaySettings,
        }}
      /> */}

      <ManageVocab_MODAL
        SHOW_modal={SHOW_vocabModal}
        TOGGLE_modal={() => HANDLE_vocabModal({ clear: true })}
        toEdit_VOCAB={toEdit_VOCAB}
        toEdit_TRANSLATIONS={toEdit_TRANSLATIONS}
        selected_LIST={selected_LIST}
      />
      <Btn
        text="Delelte all"
        type="simple"
        onPress={DELETE_allVocabs}
        style={{ marginTop: "auto" }}
      />
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
