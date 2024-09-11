//
//
//

import Btn from "@/src/components/btn/btn";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import {
  ICON_calendar,
  ICON_difficultyDot,
  ICON_shuffle,
  ICON_X,
} from "@/src/components/icons/icons";
import Input_WRAP from "@/src/components/Input_WRAP/Input_WRAP";
import { MyColors } from "@/src/constants/MyColors";
import React from "react";
import { Modal, SafeAreaView, ScrollView, View } from "react-native";

interface DisplaySettingsModal_PROPS {
  sorting: string;
  SHOW_desc: boolean;
  SHOW_flags: boolean;
  SHOW_image: boolean;
  SHOW_listName: boolean;
  SHOW_difficulty: boolean;
  SHOW_displaySettingsModal: boolean;
  SET_sorting: React.Dispatch<React.SetStateAction<string>>;
  SET_showDesc: React.Dispatch<React.SetStateAction<boolean>>;
  SET_showFlags: React.Dispatch<React.SetStateAction<boolean>>;
  SET_showImage: React.Dispatch<React.SetStateAction<boolean>>;
  SET_showListName: React.Dispatch<React.SetStateAction<boolean>>;
  SET_showDifficulty: React.Dispatch<React.SetStateAction<boolean>>;
  TOGGLE_displaySettings: () => void;
}

export default function DisplaySettings_MODAL(
  props: DisplaySettingsModal_PROPS
) {
  const {
    sorting,
    SHOW_desc,
    SHOW_flags,
    SHOW_image,
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
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={SHOW_displaySettingsModal}
      style={{}}
    >
      <SafeAreaView
        style={{
          backgroundColor: MyColors.fill_bg,
          flex: 1,
        }}
      >
        <Header
          title="Display settings"
          big={true}
          btnRight={
            <Btn
              type="seethrough"
              iconLeft={<ICON_X big={true} rotate={true} />}
              onPress={TOGGLE_displaySettings}
              style={{ borderRadius: 100 }}
            />
          }
        />

        <ScrollView style={{ flex: 1 }}>
          <Input_WRAP label="Sorting" row={false}>
            <Btn
              text="Shuffle vocabs"
              iconRight={
                <ICON_shuffle
                  color={sorting === "shuffle" ? "primary" : "grey_light"}
                />
              }
              onPress={() => SET_sorting("shuffle")}
              type={sorting === "shuffle" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            <Btn
              text="By difficulty"
              iconRight={
                <ICON_difficultyDot
                  big={true}
                  difficulty={1}
                  primary={sorting === "difficulty"}
                />
              }
              onPress={() => SET_sorting("difficulty")}
              type={sorting === "difficulty" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            <Btn
              text="By date added"
              iconRight={
                <ICON_calendar
                  color={sorting === "date" ? "primary" : "grey"}
                />
              }
              onPress={() => SET_sorting("date")}
              type={sorting === "date" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            {sorting === "shuffle" && (
              <Btn
                text="Re-shuffle vocabs"
                iconRight={<ICON_shuffle color={"grey"} />}
                onPress={() => {}}
                type={"seethrough"}
                style={{ flex: 1 }}
                text_STYLES={{ flex: 1 }}
              />
            )}
          </Input_WRAP>
          <Input_WRAP label="Show vocab images" row={true}>
            <Btn
              text="No"
              onPress={() => {
                SET_showImage(false);
              }}
              type={!SHOW_image ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
            <Btn
              text="Yes"
              onPress={() => {
                SET_showImage(true);
              }}
              type={SHOW_image ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
          </Input_WRAP>
          <Input_WRAP label="Show list name when vocab is closed" row={true}>
            <Btn
              text="No"
              onPress={() => {
                SET_showListName(false);
              }}
              type={!SHOW_listName ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
            <Btn
              text="Yes"
              onPress={() => {
                SET_showListName(true);
              }}
              type={SHOW_listName ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
          </Input_WRAP>
          <Input_WRAP label="Show description when vocab is closed" row={true}>
            <Btn
              text="No"
              onPress={() => {
                SET_showDesc(false);
              }}
              type={!SHOW_desc ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
            <Btn
              text="Yes"
              onPress={() => {
                SET_showDesc(true);
              }}
              type={SHOW_desc ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
          </Input_WRAP>
          <Input_WRAP
            label="Show language flags when vocab is closed"
            row={true}
          >
            <Btn
              text="No"
              onPress={() => {
                SET_showFlags(false);
              }}
              type={!SHOW_flags ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
            <Btn
              text="Yes"
              onPress={() => {
                SET_showFlags(true);
              }}
              type={SHOW_flags ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
          </Input_WRAP>
          <Input_WRAP label="Show difficulty when vocab is closed" row={true}>
            <Btn
              text="No"
              onPress={() => {
                SET_showDifficulty(false);
              }}
              type={!SHOW_difficulty ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
            <Btn
              text="Yes"
              onPress={() => {
                SET_showDifficulty(true);
              }}
              type={SHOW_difficulty ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ textAlign: "center" }}
            />
          </Input_WRAP>
        </ScrollView>
        <Footer
          btnLeft={
            <Btn
              type="simple"
              text="Done"
              onPress={TOGGLE_displaySettings}
              style={{ flex: 1 }}
              // text_STYLES={{ color: MyColors.text_white }}
            />
          }
        />
      </SafeAreaView>
    </Modal>
  );
}
