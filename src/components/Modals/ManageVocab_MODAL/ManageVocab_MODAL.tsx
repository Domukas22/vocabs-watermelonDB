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
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectList_MODAL from "../SelectList_MODAL/SelectList_MODAL";
import SelectLanguages_MODAL from "../SelectLanguages_MODAL/SelectLanguages_MODAL";
import languages, { languagesArr_PROPS } from "@/src/constants/languages";
import { List_MODEL, Translation_MODEL, Vocab_MODEL } from "@/src/db/models";
import { USE_selectedList } from "@/src/context/SelectedList_CONTEXT";
import CREATE_vocab, {
  CreateVocab_PROPS,
} from "@/src/db/actions/vocabs/CREATE_vocab";
import GET_langs from "@/src/utils/GET_defaultLanguages/GET_defaultLanguages";
import { useToggle } from "@/src/hooks/useToggle/useToggle";
import { Lists_DB, Translations_DB } from "@/src/db";
import UPDATE_vocab from "@/src/db/actions/vocabs/UPDATE_vocab";
import { Q } from "@nozbe/watermelondb";
import HighlightableTextInput from "../../TEST";
import Test2 from "../../TEST2";
import SimpleRichTextEditor from "../../TEST2";
import Simple_MODAL from "../Simple_MODAL/Simple_MODAL";
import { preventAutoHideAsync } from "expo-splash-screen";

interface ManageVocabModal_PROPS {
  modalContent: {
    vocab: Vocab_MODEL;
    list: List_MODEL;
    translations: { list_id: string; text: string };
  };
  SHOW_manageVocabModal: boolean;
  TOGGLE_vocabModal: () => void;
  selected_LIST: List_MODEL;
}

export default function ManageVocab_MODAL(props: ManageVocabModal_PROPS) {
  const {
    SHOW_manageVocabModal,
    TOGGLE_vocabModal,
    modalContent,
    selected_LIST,
  } = props;

  const [managed_VOCAB, SET_managedVocab] = useState(null);
  // const [managed_VOCAB, SET_managedVocab] = useState({
  //   list: selected_LIST,
  //   difficulty: modalContent.vocab ? modalContent.vocab?.difficulty : 3,
  //   image: modalContent.vocab ? modalContent.vocab?.image : "",
  //   description: modalContent.vocab ? modalContent.vocab?.description : "Dummy desc",
  //   translations: modalContent.vocab
  //     ? modalContent.vocab?.translations
  //     : GET_starterLangs(),
  // });

  async function GET_vocabLangs() {
    const trs = await Translations_DB.query(
      Q.where("vocab_id", modalContent.vocab?.id)
    );
    return trs.map((t) => ({
      lang_id: t.lang_id,
      text: t.text,
    }));
  }

  function HANDLE_lang(id: string) {
    const alreadyHasLang = managed_VOCAB?.translations?.some(
      (tr) => tr.lang_id === id
    );

    if (!managed_VOCAB?.translations) return;

    const tooManyLangSelected = managed_VOCAB?.translations?.length >= 10;
    const hasOnly2Translations = managed_VOCAB?.translations?.length === 2;

    if (!alreadyHasLang) {
      if (tooManyLangSelected) return;
      const updatedTranslations = [
        ...managed_VOCAB?.translations,
        { vocab_id: "", lang_id: id, text: "" },
      ];
      SET_managedVocab((prev) => ({
        ...prev,
        translations: updatedTranslations,
      }));
    } else {
      if (hasOnly2Translations) return;
      const updatedTranslations = managed_VOCAB?.translations.filter(
        (tr) => tr.lang_id !== id
      );
      SET_managedVocab((prev) => ({
        ...prev,
        translations: updatedTranslations,
      }));
    }
  }

  useEffect(() => {
    const populate = () => {
      SET_managedVocab({
        id: modalContent.vocab ? modalContent.vocab?.id : null,
        list: modalContent.list ? modalContent.list : selected_LIST,
        difficulty: modalContent.vocab?.difficulty
          ? modalContent.vocab.difficulty
          : 3,
        image: modalContent.vocab ? modalContent.vocab?.image : "",
        description: modalContent.vocab ? modalContent.vocab?.description : "",
        translations: modalContent.translations
          ? modalContent.translations
          : [
              {
                lang_id: "en",
                text: "",
              },
              {
                lang_id: "de",
                text: "",
              },
            ],
      });
    };
    populate();
  }, [modalContent.vocab]);

  const [SHOW_selectListModal, TOGGLE_selectListModal] = useToggle(false);
  const [SHOW_selectLangModal, TOGGLE_selectLangModal] = useToggle(false);
  const [SHOW_trTextModal, TOGGLE_trTextModal] = useToggle(false);
  const [trTextModal_CONTENT, SET_trTextModalContent] = useState({
    labelText: "",
    labelIcon: null,
    text: "",
    lang_id: "",
  });

  function EDIT_translationText({
    lang_id,
    newText,
  }: {
    lang_id: string;
    newText: string;
  }) {
    // Update the translations array
    const updatedTranslations = managed_VOCAB?.translations.map((tr) =>
      tr.lang_id === lang_id ? { ...tr, text: newText } : tr
    );

    // Update the state
    SET_managedVocab((prev) => ({
      ...prev,
      translations: updatedTranslations,
    }));
  }

  function HANDLE_trTextModalText({
    text,
    action,
    lang_id,
  }: {
    text: string;
    action: "open" | "submit" | "cancel" | "updateText";
    lang_id: string;
  }) {
    console.log(lang_id);

    if (action === "submit" && lang_id) {
      EDIT_translationText({ lang_id, newText: text });
      SET_trTextModalContent((prev) => ({ ...prev, text: "" }));
      TOGGLE_trTextModal();
    }
    if (text && action === "updateText") {
      SET_trTextModalContent((prev) => ({ ...prev, text: text }));
    }
    if (action === "cancel") {
      SET_trTextModalContent((prev) => ({ ...prev, text: "" }));
      TOGGLE_trTextModal();
    }
    if (action === "open" && lang_id) {
      SET_trTextModalContent({
        text:
          managed_VOCAB?.translations?.find((t) => t.lang_id === lang_id)
            ?.text || "",
        lang_id,
        labelIcon: "",
        labelText: "",
      });

      TOGGLE_trTextModal();
    }
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
        <Header
          title={modalContent.vocab ? "Edit vocab" : "Create a new vocab"}
          big={true}
          btnRight={
            <Btn
              type="seethrough"
              iconLeft={<ICON_X big={true} rotate={true} />}
              onPress={TOGGLE_vocabModal}
              style={{ borderRadius: 100 }}
            />
          }
        />

        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        >
          {managed_VOCAB?.translations.map((tr: Translation_MODEL) => {
            const lang = languages[tr?.lang_id];

            return (
              <Input_WRAP
                key={lang.id}
                labelIcon={<ICON_flag lang={tr?.lang_id} />}
                label={`${lang?.lang?.en} translation *`}
                styles={{ padding: 20 }}
              >
                <Btn
                  text="oepn"
                  onPress={() =>
                    HANDLE_trTextModalText({ action: "open", lang_id: lang.id })
                  }
                />
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
          <Btn
            text="Edit language selection"
            onPress={TOGGLE_selectLangModal}
            type="seethrough_primary"
            style={{ flex: 1, marginHorizontal: 12, marginTop: 16 }}
          />

          <ScrollView style={{ flex: 1 }}>
            <Input_WRAP label="Choose difficulty level *" row={true}>
              <Btn
                text="Easy"
                onPress={() => {
                  SET_managedVocab((prev) => ({ ...prev, difficulty: 1 }));
                }}
                type={
                  managed_VOCAB?.vocab?.difficulty === 1
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
                  managed_VOCAB?.vocab?.difficulty === 2
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
                  managed_VOCAB?.vocab?.difficulty === 3
                    ? "difficulty_3_active"
                    : "simple"
                }
                style={{ flex: 1 }}
                text_STYLES={{ textAlign: "center" }}
              />
            </Input_WRAP>
            <Input_WRAP label="Select a list *">
              <Btn
                text={managed_VOCAB?.list?.name}
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
            <Input_WRAP label="Description (optional)">
              <StyledTextInput
                multiline={true}
                value={managed_VOCAB?.description || ""}
                SET_value={(value: string) =>
                  SET_managedVocab((prev) => ({
                    ...prev,
                    description: value,
                  }))
                }
                placeholder="Note down the place / movie / book so that you remember better..."
              />
            </Input_WRAP>

            {!modalContent.vocab ? (
              <Footer
                btnLeft={
                  <Btn
                    text="Cancel"
                    onPress={TOGGLE_vocabModal}
                    type="simple"
                  />
                }
                btnRight={
                  <Btn
                    text={modalContent.vocab ? "Save edits" : "Create vocab"}
                    onPress={() => {
                      if (modalContent.vocab) {
                        UPDATE_vocab(managed_VOCAB);
                      } else {
                        CREATE_vocab(managed_VOCAB);
                      }

                      TOGGLE_vocabModal();
                    }}
                    type="action"
                    style={{ flex: 1 }}
                  />
                }
              />
            ) : null}
          </ScrollView>
        </KeyboardAwareScrollView>
        {modalContent.vocab ? (
          <Footer
            btnLeft={
              <Btn text="Cancel" onPress={TOGGLE_vocabModal} type="simple" />
            }
            btnRight={
              <Btn
                text={modalContent.vocab ? "Save edits" : "Create vocab"}
                onPress={() => {
                  if (modalContent.vocab) {
                    UPDATE_vocab(managed_VOCAB);
                  } else {
                    CREATE_vocab(managed_VOCAB);
                  }

                  TOGGLE_vocabModal();
                }}
                type="action"
                style={{ flex: 1 }}
              />
            }
          />
        ) : null}
        <SelectList_MODAL
          {...{
            SHOW_selectListModal,
            TOGGLE_selectListModal,
            list: managed_VOCAB?.list,
            SET_list: (list: List_MODEL) => {
              SET_managedVocab((prev) => ({ ...prev, list }));
            },
          }}
        />
        {/* <SelectLanguages_MODAL
          {...{
            SHOW_selectLangModal,
            TOGGLE_selectLangModal,
            langIDs: managed_VOCAB?.translations?.map((tr) => tr.lang_id),
            HANDLE_lang,
          }}
        /> */}
        <Simple_MODAL
          {...{
            title: "Create a list",

            IS_open: SHOW_trTextModal,
            toggle: TOGGLE_trTextModal,
            btnLeft: (
              <Btn
                text="Cancel"
                onPress={() => HANDLE_trTextModalText({ action: "cancel" })}
                type="simple"
              />
            ),
            btnRight: (
              <Btn
                text="Save translation"
                onPress={() =>
                  HANDLE_trTextModalText({
                    action: "submit",
                    lang_id: trTextModal_CONTENT.lang_id,
                    text: trTextModal_CONTENT.text,
                  })
                }
                type="action"
                style={{ flex: 1 }}
              />
            ),
          }}
        >
          <Input_WRAP
            labelIcon={<ICON_flag lang={trTextModal_CONTENT?.lang_id} />}
            label={`${trTextModal_CONTENT.lang_id} translation *`}
            styles={{ padding: 20 }}
          >
            <StyledTextInput
              multiline={true}
              value={trTextModal_CONTENT.text}
              SET_value={(val: string) => {
                HANDLE_trTextModalText({ action: "updateText", text: val });
              }}
              placeholder="Your vocab..."
            />
            {/* <Input_WRAP
                key={lang.id}
                labelIcon={<ICON_flag lang={tr.lang_id} />}
                label={`${lang?.lang?.en} translation *`}
                styles={{ padding: 20 }}
              >
                <Btn
                  text="oepn"
                  onPress={() =>
                    HANDLE_trTextModalText({ action: "open", lang_id: lang.id })
                  }
                />
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
              </Input_WRAP> */}
          </Input_WRAP>
        </Simple_MODAL>
      </SafeAreaView>
    </Modal>
  );
}
