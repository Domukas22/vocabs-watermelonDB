//
//
//

import { ICON_difficultyDot } from "@/src/components/icons/icons";
import RENDER_textWithHighlights from "@/src/components/RENDER_textWithHighlights/RENDER_textWithHighlights";
import { Styled_TEXT } from "@/src/components/Styled_TEXT";
import { MyColors } from "@/src/constants/MyColors";
import { Image, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";

interface VocabFront_PROPS {
  visible?: boolean;
  image?: NodeRequire;
  frontText?: string;
  frontTextHighlights?: string;
  listName?: string;
  description?: string;
  difficulty?: 1 | 2 | 3;
  flags?: string;
  SHOW_image?: boolean;
  SHOW_listName?: boolean;
  SHOW_description?: boolean;
  SHOW_difficulty?: boolean;
  SHOW_flags?: boolean;
  onPress?: () => void;
  disablePressAnimation?: boolean;
}

export default function Vocab_FRONT({
  visible = true,
  image = require("@/assets/images/dummyImage.jpg"),
  frontText = "Vocabs app is awesome",
  frontTextHighlights = "14,15,16,17,18,19,20",
  listName = "Name of the list",
  description = "Vocab description",
  flags = "flags",
  difficulty = 2,
  SHOW_image = false,
  SHOW_listName = false,
  SHOW_description = false,
  SHOW_difficulty = true,
  SHOW_flags = false,
  onPress,
  disablePressAnimation = false,
}: VocabFront_PROPS) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: MyColors.btn_2 },
          pressed &&
            !disablePressAnimation && { backgroundColor: MyColors.btn_3 },
          // Pressed and non-pressed styles
        ]}
        onPress={onPress}
      >
        {SHOW_image && (
          <Image
            source={require("@/assets/images/dummyImage.jpg")}
            style={{ height: 160, width: "100%" }}
          />
        )}
        {visible && (
          <View style={s.topPadding}>
            <Styled_TEXT type="vocabTitle">
              <RENDER_textWithHighlights
                text={frontText}
                highlights={frontTextHighlights}
                difficulty={difficulty}
              />
            </Styled_TEXT>

            {SHOW_listName && (
              <Styled_TEXT type="label_small">{listName}</Styled_TEXT>
            )}
            {SHOW_description && (
              <Styled_TEXT type="label_small">{description}</Styled_TEXT>
            )}
            {(SHOW_flags || SHOW_difficulty) && (
              <View style={s.topIconWrap}>
                {/* {flags &&
            content.translations.map((tr) => (
              <ICON_flag
                key={content.id + "/" + tr.lang}
                lang={tr.lang}
              />
            ))} */}
                {SHOW_flags && (
                  <Styled_TEXT type="label_small">{flags}</Styled_TEXT>
                )}
                {SHOW_difficulty && (
                  <ICON_difficultyDot difficulty={difficulty} />
                )}
              </View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
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
});
