import { View, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../helpers/common";

const BackButton = ({ firstText, secondText }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        className="p-1 rounded-full"
        style={{ backgroundColor: theme.colors.neutral(0.1) }}
      >
        <Icon.ArrowLeft
          height="25"
          width="25"
          strokeWidth={2.5}
          stroke={theme.colors.black}
        />
      </Pressable>
      <View className="gap-2">
        <View>{firstText}</View>
        <Text>{secondText}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: wp(8),
    alignItems: "center",
    marginVertical: wp(2),
  },
});

export default BackButton;
