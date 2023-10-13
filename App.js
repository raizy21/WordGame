import React, { useState } from "react";
import { Text, View } from "react-native";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
import styles from "./App.styles";
import question from "./assets/data/QuestionWithOptions";

const App = () => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </View>
  );
};

export default App;
