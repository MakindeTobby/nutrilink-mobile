import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { wp } from "../helpers/common";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        className="p-1 rounded-full"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <Icon.ArrowLeft
          height="25"
          width="25"
          strokeWidth={2.5}
          stroke={theme.colors.white}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: wp(2),
  },
});

export default BackButton;
