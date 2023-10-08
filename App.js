import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import styles from "./App.styles";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "book"?</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={require("./assets/image/book.jpg")}
            resizeMode="contain"
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Book</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
