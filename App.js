import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
import styles from "./App.styles";
import question from "./assets/data/ManyQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= question.length) {
      setCurrentQuestionIndex[0];
    } else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
};

export default App;
