import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = (props) => {
  const { name, onPress, customStyles,textstyle } = props;
  return (
    <View style={[styles.container,customStyles]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text,textstyle]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
