//
//
//

import Btn from "@/src/components/btn/btn";
import MyVocabLists from "@/src/components/Flatlists/MyVocabLists/MyVocabLists";
import Header from "@/src/components/Header/Header";
import { ICON_X } from "@/src/components/icons/icons";
import MainScreen_VIEW from "@/src/components/mainScreen_VIEW/mainScreen_VIEW";
import Simple_MODAL from "@/src/components/Modals/Simple_MODAL/Simple_MODAL";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import StyledTextInput from "@/src/components/StyledTextInput/StyledTextInput";
import createDefaults from "@/src/db/actions/createDefaults";
import CREATE_list from "@/src/db/actions/lists/CREATE_list";
import { List_MODEL } from "@/src/db/models";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function Explore_SCREEN() {
  return (
    <MainScreen_VIEW>
      <Header title="Explore 863 Vocabs" big={true} />

      <Styled_TEXT>List</Styled_TEXT>
    </MainScreen_VIEW>
  );
}

const s = StyleSheet.create({});
