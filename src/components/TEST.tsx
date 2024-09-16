import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MyColors } from "../constants/MyColors";

const HighlightableTextInput: React.FC = () => {
  const [text, setText] = useState<string>(""); // Main input text
  const [highlights, setHighlights] = useState<number[]>([]); // Array of highlighted character indexes
  const inputRef = useRef<TextInput>(null);

  // Handle text change
  const handleTextChange = (newText: string) => {
    const oldText = text;
    const oldLength = oldText.length;
    const newLength = newText.length;

    // Update the main text immediately
    setText(newText);

    // Only proceed if there's any change to process
    if (oldText === newText) return;

    // Calculate changes between oldText and newText
    const changes = calculateTextChanges(oldText, newText);

    // If no changes, return early
    if (changes.length === 0) return;

    // Track highlights only in the affected regions
    const updatedHighlights: number[] = [];

    // Iterate through the old highlights and adjust them based on the changes
    for (const index of highlights) {
      let adjustedIndex = index;

      changes.forEach(({ type, position, count }) => {
        if (type === "add" && position <= adjustedIndex) {
          adjustedIndex += count; // Shift right
        } else if (type === "remove" && position <= adjustedIndex) {
          adjustedIndex = Math.max(0, adjustedIndex - count); // Shift left or remove
        }
      });

      // Only include valid indices
      if (adjustedIndex < newLength) {
        updatedHighlights.push(adjustedIndex);
      }
    }

    // Remove duplicates and set updated highlights
    setHighlights([...new Set(updatedHighlights)]);
  };

  // Optimize the text difference algorithm
  const calculateTextChanges = (oldText: string, newText: string) => {
    const changes: {
      type: "add" | "remove";
      position: number;
      count: number;
    }[] = [];

    let oldPos = 0;
    let newPos = 0;

    while (oldPos < oldText.length || newPos < newText.length) {
      if (
        oldPos < oldText.length &&
        newPos < newText.length &&
        oldText[oldPos] === newText[newPos]
      ) {
        oldPos++;
        newPos++;
      } else if (
        newPos < newText.length &&
        (oldPos >= oldText.length || oldText[oldPos] !== newText[newPos])
      ) {
        // Characters added in newText
        const start = newPos;
        while (
          newPos < newText.length &&
          (oldPos >= oldText.length || oldText[oldPos] !== newText[newPos])
        ) {
          newPos++;
        }
        changes.push({ type: "add", position: start, count: newPos - start });
      } else if (
        oldPos < oldText.length &&
        (newPos >= newText.length || oldText[oldPos] !== newText[newPos])
      ) {
        // Characters removed from oldText
        const start = oldPos;
        while (
          oldPos < oldText.length &&
          (newPos >= newText.length || oldText[oldPos] !== newText[newPos])
        ) {
          oldPos++;
        }
        changes.push({
          type: "remove",
          position: start,
          count: oldPos - start,
        });
      }
    }

    return changes;
  };

  // Function to render highlighted text
  const renderHighlightedText = () => {
    return text.split("").map((char, index) => {
      const isHighlighted = highlights.includes(index);
      return (
        <Text
          key={index}
          style={{
            fontWeight: isHighlighted ? "700" : "400",
            color: isHighlighted
              ? MyColors.text_difficulty_3
              : MyColors.text_difficulty_1,
          }}
        >
          {char}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* Highlighted text layer */}
      <ScrollView style={styles.textLayer}>
        <Text style={[styles.textInput, { position: "absolute" }]}>
          {renderHighlightedText()}
        </Text>
      </ScrollView>

      {/* User text input layer */}
      <TextInput
        ref={inputRef}
        style={[styles.textInput, styles.inputLayer]}
        value={text}
        onChangeText={handleTextChange}
        multiline
      />

      <Button
        title="Clear Highlights"
        onPress={() => setHighlights([])} // Clear all highlights
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    height: 300,
  },
  textInput: {
    fontSize: 18,
    lineHeight: 24,
    color: MyColors.btn_3,
  },
  textLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    padding: 10,
  },
  inputLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    padding: 10,
    color: "transparent", // Make the text input itself invisible
  },
});

export default HighlightableTextInput;
