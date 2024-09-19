//
//
//

import { MyColors } from "@/src/constants/MyColors";
import { Styled_TEXT } from "../Styled_TEXT";

interface RenderTextWithhighlights_PROPS {
  text: string;
  highlights: string;
  difficulty: 1 | 2 | 3;
}

export default function RENDER_textWithHighlights({
  text,
  highlights,
  difficulty,
}: RenderTextWithhighlights_PROPS) {
  const highlightedIndexes = highlights
    .split(",")
    .map((i) => parseInt(i, 10))
    .filter((i) => !isNaN(i)); // Make sure to filter out invalid numbers

  const highlightTextColor =
    difficulty === 3
      ? MyColors.text_difficulty_3
      : difficulty === 2
      ? MyColors.text_difficulty_2
      : MyColors.text_difficulty_1;

  const textDecorationLine = difficulty === 1 ? "line-through" : undefined;

  return (
    <Styled_TEXT>
      {text.split("").map((letter, index) => {
        const isHighlighted = highlightedIndexes.includes(index);
        return (
          <Styled_TEXT
            key={index}
            style={[
              isHighlighted && { color: highlightTextColor },
              isHighlighted && difficulty === 1 && { textDecorationLine },
            ]}
            // style={[
            //   isHighlighted && { color },
            //   difficulty === 1 && { textDecorationLine: "underline" },
            // ]}
          >
            {letter}
          </Styled_TEXT>
        );
      })}
    </Styled_TEXT>
  );
}
