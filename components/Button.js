import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { wp } from "../helpers/common";

const Button = (props) => {
  const filledBgColor = props.color || theme.colors.darkPrimary;
  const outlinedColor = theme.colors.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled
    ? theme.colors.white
    : theme.colors.darkPrimary;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: wp(5), ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: theme.colors.darkPrimary,
    borderWidth: 2,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
