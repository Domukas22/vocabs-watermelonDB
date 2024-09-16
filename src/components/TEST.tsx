import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Modal,
  Pressable,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MyColors } from "../constants/MyColors";

const HighlightableTextInput: React.FC = () => {
  const [text, setText] = useState<string>(""); // Main input text
  const [highlights, setHighlights] = useState<number[]>([]); // Array of highlighted character indexes
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // Modal visibility
  const [tempHighlights, setTempHighlights] = useState<number[]>([]); // Temporary highlights in modal

  const handleTextChange = (newText: string) => {
    const oldText = text;
    const oldLength = oldText.length;
    const newLength = newText.length;

    // Update the main text
    setText(newText);

    // Calculate the differences between old and new texts
    const changes = calculateTextChanges(oldText, newText);

    // Adjust highlights based on the changes
    const updatedHighlights = highlights.map((index) => {
      if (index >= newLength) {
        // Highlight is beyond the new text length, remove it
        return null;
      }

      // Adjust highlights based on detected changes
      let adjustedIndex = index;

      // Shift highlights according to the calculated changes
      changes.forEach(({ type, position, count }) => {
        if (type === "add" && position <= adjustedIndex) {
          // Characters were added before the highlight, shift highlight index
          adjustedIndex += count;
        } else if (type === "remove" && position < adjustedIndex) {
          // Characters were removed before the highlight, shift highlight index
          adjustedIndex -= Math.min(count, adjustedIndex - position);
        }
      });

      return adjustedIndex;
    });

    // Remove duplicates and filter out invalid highlight indices
    const uniqueHighlights = Array.from(new Set(updatedHighlights)).filter(
      (index) => index !== null && index < newLength
    ) as number[];

    // Set the updated highlights
    setHighlights(uniqueHighlights);
  };

  // Helper function to calculate text changes
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
        // Characters are the same, move forward
        oldPos++;
        newPos++;
      } else if (
        newPos < newText.length &&
        (oldPos >= oldText.length || oldText[oldPos] !== newText[newPos])
      ) {
        // Character added in new text
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
        // Character removed from old text
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

  console.log(highlights);

  // Toggle highlights for each letter in modal
  const toggleHighlight = (index: number) => {
    setTempHighlights(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove highlight
          : [...prev, index] // Add highlight
    );
  };

  // Save highlights from modal to main input
  const saveHighlights = () => {
    setHighlights(tempHighlights);
    setIsModalVisible(false);
  };

  // Render text with highlights applied
  const renderHighlightedText = () => {
    if (!text) return null;

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

  // Render the modal with individual letter boxes
  const renderModalContent = () => {
    return (
      <ScrollView contentContainerStyle={styles.modalContent}>
        {text.split("").map((char, index) => (
          <Pressable
            key={index}
            style={[
              styles.letterBox,
              tempHighlights.includes(index) ? styles.highlighted : null,
            ]}
            onPress={() => toggleHighlight(index)}
          >
            <Text>{char}</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, { fontSize: 18, color: MyColors.btn_3 }]}
        onChangeText={handleTextChange}
        multiline
      >
        {renderHighlightedText()}
      </TextInput>

      <Button
        title="Set Highlights"
        onPress={() => {
          setTempHighlights(highlights); // Load current highlights into modal
          setIsModalVisible(true);
        }}
      />
      <Button title="Clear Highlights" onPress={() => setHighlights([])} />

      {/* Modal for letter highlighting */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {renderModalContent()}

          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            <Button title="Save Highlights" onPress={saveHighlights} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,

    textAlignVertical: "top",
  },
  textDisplay: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  modalContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  letterBox: {
    width: 30,
    height: 40,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  highlighted: {
    backgroundColor: "yellow",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default HighlightableTextInput;
