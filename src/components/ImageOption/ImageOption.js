import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text }) => (
  <View style={styles.optionContainer}>
  <Image source={require(image)} 
         resizeMode="contain"
         style={styles.optionImage}
    />
    <Text style={styles.optionText}>{text}</Text>
  </View>
);

ImageOption.propType = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ImageOption.defaultProps = {
  text: "Default",
};

export default ImageOption;
