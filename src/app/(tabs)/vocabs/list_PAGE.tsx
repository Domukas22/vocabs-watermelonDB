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
import React, { useState } from "react";
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
import ObservedVocabsOfList_FLATLIST from "@/src/components/Flatlists/VocabsOfList_FLATLIST/VocabsOfList_FLATLIST";
import db, { Vocabs_DB } from "@/src/db";

export default function Home_SCREEN() {
  const { selectedList_ID, selectedList_NAME } = USE_selectedList();
  const [SHOW_displaySettingsModal, SET_displaySettingsModalOpen] =
    useState(false);
  const [SHOW_manageVocabModal, SET_manageVocabModal] = useState(false);

  const [SHOW_image, SET_showImage] = useState(false);
  const [SHOW_listName, SET_showListName] = useState(false);
  const [SHOW_desc, SET_showDesc] = useState(false);
  const [SHOW_flags, SET_showFlags] = useState(false);
  const [SHOW_difficulty, SET_showDifficulty] = useState(true);

  const [sorting, SET_sorting] = useState("shuffle");

  const [search, SET_search] = useState("");

  function TOGGLE_displaySettings() {
    SET_displaySettingsModalOpen((prev) => !prev);
  }
  function TOGGLE_manageVocab() {
    SET_manageVocabModal((prev) => !prev);
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
        title={selectedList_NAME || "none"}
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
        <SearchBar value={search} SET_value={SET_search} />
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
          onPress={TOGGLE_manageVocab}
        />
      </Subnav>

      {/* <Styled_FLATLIST
        data={vocabDummies.vocabs}
        renderItem={({ item }) => (
          <Vocab
            key={item.id}
            {...item}
            listID={vocabDummies.id}
            listName={vocabDummies.name}
            displayProps={{
              SHOW_image,
              SHOW_listName,
              SHOW_desc,
              SHOW_flags,
              SHOW_difficulty,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        style={s.vocabWrap}
      /> */}

      <ObservedVocabsOfList_FLATLIST
        selectedList_ID={selectedList_ID}
        displayProps={{
          SHOW_desc,
          SHOW_image,
          SHOW_flags,
          SHOW_listName,
          SHOW_difficulty,
        }}
      />

      <DisplaySettings_MODAL
        {...{
          sorting,
          SHOW_desc,
          SHOW_image,
          SHOW_flags,
          SHOW_listName,
          SHOW_difficulty,
          SHOW_displaySettingsModal,
          SET_sorting,
          SET_showDesc,
          SET_showFlags,
          SET_showImage,
          SET_showListName,
          SET_showDifficulty,
          TOGGLE_displaySettings,
        }}
      />
      <ManageVocab_MODAL
        {...{
          IS_edit: false,
          SHOW_manageVocabModal,
          TOGGLE_manageVocab,
        }}
      />
      <Btn text="Delelte all" type="simple" onPress={DELETE_allVocabs} />
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({
  vocabWrap: {
    padding: 12,
    flex: 1,
  },
});
