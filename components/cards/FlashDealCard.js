import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import * as Icon from "react-native-feather";

const FlashDealCard = () => {
  return (
    <View className="p-2 bg-white rounded-md shadow-sm mx-1">
      <View className="flex-row justify-center items-center relative">
        <View
          className="flex-col items-start justify-between space-x-1 p-2 absolute z-20"
          style={{ width: wp(50), height: hp(12) }}
        >
          <View className=" bg-[#FFF8EE] rounded-full p-1">
            <Text
              className="font-bold text-sm"
              style={{ color: theme.colors.secondary }}
            >
              {"1h 25m 3s "}{" "}
            </Text>
          </View>

          <View>
            <Text className="font-extrabold text-sm text-white">70% OFF</Text>
            <Text className="text-xs text-white">Up to #400</Text>
          </View>
        </View>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 0.6)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <Image
          style={{ width: wp(50), height: hp(12) }}
          className=" rounded-t-md self-center"
          source={require("../../assets/images/meal1.png")}
          resizeMode="cover"
        />
      </View>
      <View className=" pb-4 space-y-2">
        <Text className="text-base font-medium pt-2">
          {"KFC Chicken Bucket"}
        </Text>

        <View className="flex-row items-center space-x-1">
          <Text className="text-xs">
            <Text
              style={{ color: theme.colors.darkPrimary }}
              className="font-semibold"
            >
              #{"400 "}{" "}
            </Text>
            till
            <Text className="text-gray-700">
              <Text className="font-semibold"> {"1h 25m 3s"} </Text>
            </Text>
          </Text>
        </View>

        <View className="flex-row items-center space-x-1 pt-1">
          <Icon.MapPin
            stroke={theme.colors.white}
            color={theme.colors.white}
            width={15}
            fill={theme.colors.secondary}
            height={15}
          />
          <Text className="text-gray-700 text-xs">
            {"KFC, 15, Bodija Market road"}
          </Text>
        </View>
        <View className="pt-2 flex-col items-start">
          <Pressable
            style={{ backgroundColor: theme.colors.darkPrimary }}
            className="px-5 py-2 rounded-full  "
          >
            <Text className="text-center text-white">Add to Cart</Text>
          </Pressable>
        </View>

        {/* <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              Nearby* {item.address}
            </Text>
          </View> */}
      </View>
    </View>
  );
};

export default FlashDealCard;

const styles = StyleSheet.create({
  gradient: {
    width: wp(50),
    height: hp(12),
    // bottom: 0,
    zIndex: 10,
    position: "absolute",
  },
});
