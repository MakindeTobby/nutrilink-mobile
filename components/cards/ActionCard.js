import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { theme } from "../../constants/theme";
import { wp } from "../../helpers/common";
import { useNavigation } from "@react-navigation/native";

const ActionCard = ({ image, mainText, subText, link }) => {
  const navigation = useNavigation();

  return (
    <View
      className="bg-white px-3 py-6 rounded-md"
      style={{ marginVertical: wp(2) }}
    >
      <View className="flex-row justify-between items-center">
        <View className="">
          <Image source={image} className="w-15 h-15" />
        </View>
        <View className="w-[70%] gap-1 ">
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
        <Pressable
          className=" p-2 rounded-full  "
          onPress={() => navigation.navigate(link)}
        >
          <Icon.ArrowRight
            height="25"
            width="25"
            strokeWidth={2.5}
            stroke={theme.colors.neutral(0.4)}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainText: {
    fontSize: wp(4.2),
    fontWeight: theme.fontWeights.semibold,
  },
  subText: {
    fontSize: wp(3.3),
  },
});

export default ActionCard;
