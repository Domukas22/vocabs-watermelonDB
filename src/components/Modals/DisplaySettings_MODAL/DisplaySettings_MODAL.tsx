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
import Settings_TOGGLE from "../../Settings_TOGGLE/Settings_TOGGLE";
import Vocab_FRONT from "../../Vocab/components/Vocab_FRONT/Vocab_FRONT";
import { Styled_TEXT } from "../../Styled_TEXT";

interface DisplaySettingsModal_PROPS {
  props: {
    search: string;
    sorting: "shuffle" | "date" | "difficulty";
    sortDirection: "ascending" | "descending";
    image: boolean;
    listName: boolean;
    desc: boolean;
    flags: boolean;
    difficulty: boolean;
    frontLangId: string;
    difficultyFilter: [1 | 2 | 3];
  };
  SET_displayProps: React.Dispatch<React.SetStateAction<object>>;
  open: boolean;
  TOGGLE_open: () => void;
}

export default function DisplaySettings_MODAL(x: DisplaySettingsModal_PROPS) {
  const { open, TOGGLE_open, props, SET_displayProps } = x;

  function toggle(
    propName: "image" | "listName" | "desc" | "flags" | "difficulty"
  ) {
    switch (propName) {
      case "image":
        SET_displayProps((p) => ({ ...p, image: !p.image }));
        break;
      case "listName":
        SET_displayProps((p) => ({ ...p, listName: !p.listName }));
        break;
      case "desc":
        SET_displayProps((p) => ({ ...p, desc: !p.desc }));
        break;
      case "flags":
        SET_displayProps((p) => ({ ...p, flags: !p.flags }));
        break;
      case "difficulty":
        SET_displayProps((p) => ({ ...p, difficulty: !p.difficulty }));
        break;
    }
  }

  function FILTER_difficulty(difficulty: 1 | 2 | 3) {
    props.difficultyFilter.includes(difficulty)
      ? SET_displayProps((p) => ({
          ...p,
          difficultyFilter: p.difficultyFilter.filter((d) => d !== difficulty),
        }))
      : SET_displayProps((p) => ({
          ...p,
          difficultyFilter: [...p.difficultyFilter, difficulty],
        }));
  }

  return (
    <Modal animationType="slide" transparent={true} visible={open} style={{}}>
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
              onPress={TOGGLE_open}
              style={{ borderRadius: 100 }}
            />
          }
        />

        <ScrollView style={{ flex: 1 }}>
          <Input_WRAP label="Sorting" row={false}>
            {/* <Btn
              text="Shuffle vocabs"
              iconRight={
                <ICON_shuffle
                  color={props.sorting === "shuffle" ? "primary" : "grey_light"}
                />
              }
              onPress={() =>
                SET_displayProps((p) => ({ ...p, sorting: "shuffle" }))
              }
              type={props.sorting === "shuffle" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            /> */}
            <Btn
              text="By difficulty"
              iconRight={
                <ICON_difficultyDot
                  big={true}
                  difficulty={props.sorting === "difficulty" ? 0 : 1}
                />
              }
              onPress={() =>
                SET_displayProps((p) => ({ ...p, sorting: "difficulty" }))
              }
              type={props.sorting === "difficulty" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            <Btn
              text="By date added"
              iconRight={
                <ICON_calendar
                  color={props.sorting === "date" ? "primary" : "grey"}
                />
              }
              onPress={() =>
                SET_displayProps((p) => ({ ...p, sorting: "date" }))
              }
              type={props.sorting === "date" ? "active" : "simple"}
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            {/* {props.sorting === "shuffle" && (
              <Btn
                text="Re-shuffle vocabs"
                iconRight={<ICON_shuffle color={"grey"} />}
                onPress={() => {}}
                type={"seethrough"}
                style={{ flex: 1 }}
                text_STYLES={{ flex: 1 }}
              />
            )} */}
            {(props.sorting === "difficulty" || props.sorting === "date") && (
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Btn
                  text={
                    props.sorting === "difficulty"
                      ? "Easy  -->  Hard"
                      : "New  -->  Old"
                  }
                  onPress={() =>
                    SET_displayProps((p) => ({
                      ...p,
                      sortDirection: "ascending",
                    }))
                  }
                  type={
                    props.sortDirection === "ascending"
                      ? "difficulty_1_active"
                      : "simple"
                  }
                  style={{ flex: 1 }}
                />
                <Btn
                  text={
                    props.sorting === "difficulty"
                      ? "Hard  -->  Easy"
                      : "Old  -->  New"
                  }
                  onPress={() =>
                    SET_displayProps((p) => ({
                      ...p,
                      sortDirection: "descending",
                    }))
                  }
                  type={
                    props.sortDirection === "descending"
                      ? "difficulty_1_active"
                      : "simple"
                  }
                  style={{ flex: 1 }}
                />
              </View>
            )}
          </Input_WRAP>
          <Input_WRAP label="Filter by difficulty" row={false}>
            <Btn
              text="Easy"
              iconRight={
                props.difficultyFilter.includes(1) ? (
                  <ICON_X big={true} rotate={true} color="difficulty_1" />
                ) : (
                  <ICON_difficultyDot big={true} difficulty={1} />
                )
              }
              onPress={() => FILTER_difficulty(1)}
              type={
                props.difficultyFilter.includes(1)
                  ? "difficulty_1_active"
                  : "simple"
              }
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            <Btn
              text="Medium"
              iconRight={
                props.difficultyFilter.includes(2) ? (
                  <ICON_X big={true} rotate={true} color="difficulty_2" />
                ) : (
                  <ICON_difficultyDot big={true} difficulty={2} />
                )
              }
              onPress={() => FILTER_difficulty(2)}
              type={
                props.difficultyFilter.includes(2)
                  ? "difficulty_2_active"
                  : "simple"
              }
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
            <Btn
              text="Hard"
              iconRight={
                props.difficultyFilter.includes(3) ? (
                  <ICON_X big={true} rotate={true} color="difficulty_3" />
                ) : (
                  <ICON_difficultyDot big={true} difficulty={3} />
                )
              }
              onPress={() => FILTER_difficulty(3)}
              type={
                props.difficultyFilter.includes(3)
                  ? "difficulty_3_active"
                  : "simple"
              }
              style={{ flex: 1 }}
              text_STYLES={{ flex: 1 }}
            />
          </Input_WRAP>

          <Input_WRAP label="Vocab preview" styles={{ gap: 40 }}>
            <View style={{ gap: 12 }}>
              <View
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: MyColors.border_white_005,
                }}
              >
                <Vocab_FRONT
                  SHOW_image={props.image}
                  SHOW_listName={props.listName}
                  SHOW_description={props.desc}
                  SHOW_difficulty={props.difficulty}
                  SHOW_flags={props.flags}
                  disablePressAnimation={true}
                />
              </View>
              <View
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: MyColors.border_white_005,
                  overflow: "hidden",
                }}
              >
                <Settings_TOGGLE
                  text="Show image"
                  active={props.image}
                  onPress={() => {
                    toggle("image");
                  }}
                />
                <Settings_TOGGLE
                  text="Show list name"
                  active={props.listName}
                  onPress={() => {
                    toggle("listName");
                  }}
                />
                <Settings_TOGGLE
                  text="Show description"
                  active={props.desc}
                  onPress={() => {
                    toggle("desc");
                  }}
                />
                <Settings_TOGGLE
                  text="Show flags"
                  active={props.flags}
                  onPress={() => {
                    toggle("flags");
                  }}
                />
                <Settings_TOGGLE
                  text="Show difficulty"
                  active={props.difficulty}
                  onPress={() => {
                    toggle("difficulty");
                  }}
                  last
                />
              </View>
            </View>
          </Input_WRAP>
        </ScrollView>
        <Footer
          btnLeft={
            <Btn
              type="simple"
              text="Done"
              onPress={TOGGLE_open}
              style={{ flex: 1 }}
              // text_STYLES={{ color: MyColors.text_white }}
            />
          }
        />
      </SafeAreaView>
    </Modal>
  );
}
