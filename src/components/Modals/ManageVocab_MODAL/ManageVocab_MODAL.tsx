//
//
//

import Btn from "@/src/components/btn/btn";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import {
  ICON_calendar,
  ICON_difficultyDot,
  ICON_dropdownArrow,
  ICON_flag,
  ICON_image,
  ICON_shuffle,
  ICON_X,
} from "@/src/components/icons/icons";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import { MyColors } from "@/src/constants/MyColors";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectList_MODAL from "../SelectList_MODAL/SelectList_MODAL";
import SelectLanguages_MODAL from "../SelectLanguages_MODAL/SelectLanguages_MODAL";
import languages, { Language_PROPS } from "@/src/constants/languages";
import { Translation_MODEL, Vocab_MODEL } from "@/src/db/models";
import { USE_selectedList } from "@/src/context/SelectedList_CONTEXT";
import CREATE_vocab from "@/src/db/actions/vocabs/CREATE_vocab";

interface DisplaySettingsModal_PROPS {
  IS_edit: boolean;
  SHOW_manageVocabModal: boolean;
  TOGGLE_manageVocab: () => void;
  vocab?: Vocab_MODEL;
}

export default function ManageVocab_MODAL(props: DisplaySettingsModal_PROPS) {
  const {
    IS_edit = false,
    SHOW_manageVocabModal,
    TOGGLE_manageVocab,
    vocab,
  } = props;

  const [managed_VOCAB, SET_managedVocab] = useState({
    list_id: IS_edit ? undefined : USE_selectedList().selectedList_ID,
    difficulty: IS_edit ? vocab?.difficulty : 3,
    image: IS_edit ? vocab?.image : "",
    description: IS_edit ? vocab?.description : "",
    translations: IS_edit
      ? vocab?.translations
      : (languages
          .filter((l) => l.id === "en" || l.id === "de")
          .map((l) => ({
            vocab_id: vocab?.id,
            lang_id: l.id,
            text: "",
          })) as Translation_MODEL[]),
  });

  function HANDLE_lang(id: string) {
    const alreadyHasLang = managed_VOCAB.translations.some(
      (tr) => tr.lang_id === id
    );
    const tooManyLangSelected = managed_VOCAB.translations.length >= 10;
    const hasOnly2Translations = managed_VOCAB.translations.length === 2;

    if (!alreadyHasLang) {
      if (tooManyLangSelected) return;
      const updatedTranslations = [
        ...managed_VOCAB.translations,
        { vocab_id: "", lang_id: id, text: "" },
      ];
      SET_managedVocab((prev) => ({
        ...prev,
        translations: updatedTranslations,
      }));
    } else {
      if (hasOnly2Translations) return;
      const updatedTranslations = managed_VOCAB.translations.filter(
        (tr) => tr.lang_id !== id
      );
      SET_managedVocab((prev) => ({
        ...prev,
        translations: updatedTranslations,
      }));
    }
  }

  const lists = [
    { id: "list 1" },
    { id: "list 2" },
    { id: "list 3" },
    { id: "list 4" },
    { id: "list 5" },
  ];
  const [listID, SET_listID] = useState(lists[0].id);

  const [SHOW_selectListModal, SET_selectListModal] = useState(false);
  const [SHOW_selectLangModal, SET_selectLangModal] = useState(false);

  function TOGGLE_selectListModal() {
    SET_selectListModal((prev) => !prev);
  }
  function TOGGLE_selectLangModal() {
    SET_selectLangModal((prev) => !prev);
  }
  function EDIT_translationText({
    lang_id,
    newText,
  }: {
    lang_id: string;
    newText: string;
  }) {
    // Update the translations array
    const updatedTranslations = managed_VOCAB.translations.map((tr) =>
      tr.lang_id === lang_id ? { ...tr, text: newText } : tr
    );

    // Update the state
    SET_managedVocab((prev) => ({
      ...prev,
      translations: updatedTranslations,
    }));
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={SHOW_manageVocabModal}
      style={{}}
    >
      <SafeAreaView
        style={{
          backgroundColor: MyColors.fill_bg,
          flex: 1,
        }}
      >
        <Styled_TEXT>{managed_VOCAB.list_id}</Styled_TEXT>
        <Header
          title="Create a new vocab"
          big={true}
          btnRight={
            <Btn
              type="seethrough"
              iconLeft={<ICON_X big={true} rotate={true} />}
              onPress={TOGGLE_manageVocab}
              style={{ borderRadius: 100 }}
            />
          }
        />

        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        >
          <ScrollView style={{ flex: 1 }}>
            <Input_WRAP label="Choose difficulty level *" row={true}>
              <Btn
                text="Easy"
                onPress={() => {
                  SET_managedVocab((prev) => ({ ...prev, difficulty: 1 }));
                }}
                type={
                  managed_VOCAB.difficulty === 1
                    ? "difficulty_1_active"
                    : "simple"
                }
                style={{ flex: 1 }}
                text_STYLES={{ textAlign: "center" }}
              />
              <Btn
                text="Medium"
                onPress={() => {
                  SET_managedVocab((prev) => ({ ...prev, difficulty: 2 }));
                }}
                type={
                  managed_VOCAB.difficulty === 2
                    ? "difficulty_2_active"
                    : "simple"
                }
                style={{ flex: 1 }}
                text_STYLES={{ textAlign: "center" }}
              />
              <Btn
                text="Hard"
                onPress={() => {
                  SET_managedVocab((prev) => ({ ...prev, difficulty: 3 }));
                }}
                type={
                  managed_VOCAB.difficulty === 3
                    ? "difficulty_3_active"
                    : "simple"
                }
                style={{ flex: 1 }}
                text_STYLES={{ textAlign: "center" }}
              />
            </Input_WRAP>
            <Input_WRAP label="Select a list *">
              <Btn
                text={listID}
                iconRight={<ICON_dropdownArrow />}
                onPress={TOGGLE_selectListModal}
                type="simple"
                style={{ flex: 1 }}
                text_STYLES={{ flex: 1 }}
              />
            </Input_WRAP>
            <Input_WRAP label="Take or upload an image (optional)" row={false}>
              {/* <View style={{ flexDirection: "row", gap: 8, flex: 1 }}>
                <Btn
                  text="Replace image"
                  onPress={() => {}}
                  type="simple"
                  style={{ flex: 1 }}
                />
                <Btn text="Remove" onPress={() => {}} type="delete" />
              </View> */}

              <Btn
                iconLeft={<ICON_image />}
                text="Tap to upload image"
                onPress={() => {}}
                type="seethrough"
                style={{
                  flex: 1,
                  height: 200,
                  flexDirection: "column",
                  gap: 8,
                }}
                text_STYLES={{
                  color: MyColors.text_white_06,
                  fontFamily: "Nunito-Light",
                }}
              />
            </Input_WRAP>
            <Input_WRAP label="Select at least 2 languages *">
              {languages
                .filter((lang: Language_PROPS) =>
                  managed_VOCAB.translations.some(
                    (tr) => tr.lang_id === lang.id
                  )
                )
                .map((lang) => (
                  <Btn
                    iconLeft={
                      <Image
                        style={{
                          width: 24,
                          height: 16,
                          borderRadius: 2,
                          marginRight: 4,
                        }}
                        // source={lang.image}
                        source={lang.image}
                      />
                    }
                    text={lang.lang.en}
                    iconRight={<ICON_X rotate={true} />}
                    onPress={() => HANDLE_lang(lang.id)}
                    type="simple"
                    style={{ flex: 1 }}
                    text_STYLES={{ flex: 1 }}
                  />
                ))}

              <Btn
                iconLeft={<ICON_X color="primary" />}
                text="Select languages"
                onPress={TOGGLE_selectLangModal}
                type="seethrough_primary"
                style={{ flex: 1 }}
              />
            </Input_WRAP>

            {managed_VOCAB.translations.map((tr: Translation_MODEL) => {
              const lang = languages.find((l) => l.id === tr.lang_id);

              return (
                <Input_WRAP
                  key={tr.lang_id}
                  labelIcon={<ICON_flag lang={tr.lang_id} />}
                  label={`${lang?.lang?.en} translation *`}
                >
                  <StyledTextInput
                    multiline={true}
                    value={tr.text}
                    SET_value={(val: string) => {
                      EDIT_translationText({
                        lang_id: tr.lang_id,
                        newText: val,
                      });
                    }}
                    placeholder="Your vocab in English..."
                  />
                </Input_WRAP>
              );
            })}

            <Input_WRAP label="Description (optional)">
              <StyledTextInput
                multiline={true}
                value={managed_VOCAB?.description || ""}
                SET_value={(value: string) =>
                  SET_managedVocab((prev) => ({ ...prev, description: value }))
                }
                placeholder="Note down the place / movie / book so that you remember better..."
              />
            </Input_WRAP>

            <Footer
              btnLeft={<Btn text="Cancel" onPress={() => {}} type="simple" />}
              btnRight={
                <Btn
                  text="Create vocab"
                  onPress={() => {
                    CREATE_vocab(managed_VOCAB);
                    TOGGLE_manageVocab();
                  }}
                  type="action"
                  style={{ flex: 1 }}
                />
              }
            />
          </ScrollView>
        </KeyboardAwareScrollView>
        <SelectList_MODAL
          {...{
            SHOW_selectListModal,
            TOGGLE_selectListModal,
            listID,
            SET_listID,
            lists,
          }}
        />
        <SelectLanguages_MODAL
          {...{
            SHOW_selectLangModal,
            TOGGLE_selectLangModal,
            langIDs: managed_VOCAB?.translations?.map((tr) => tr.lang_id),
            HANDLE_lang,
          }}
        />
      </SafeAreaView>
    </Modal>
  );
}
