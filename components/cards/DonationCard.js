import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { useNavigation } from "@react-navigation/native";

const DonationCard = () => {
  const navigation = useNavigation();
  return (
    <View className="p-2 bg-white rounded-md shadow-sm mx-1">
      <View className="flex-row justify-center items-center">
        <Image
          style={{ width: wp(50), height: hp(12) }}
          className=" rounded-t-md"
          source={require("../../assets/images/children.png")}
        />
      </View>
      <View className=" pb-4 space-y-2">
        <Text className="text-base font-medium pt-2">
          {"St. Mary Orphanage"}
        </Text>
        <Text className="text-sm ">{"Orphanage"}</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-xs">
            <Text
              style={{ color: theme.colors.darkPrimary }}
              className="font-semibold"
            >
              {"2,513 "}{" "}
            </Text>
            raised of
            <Text className="text-gray-700">
              <Text className="font-semibold"> {"3000"} </Text>
              Food items
            </Text>
          </Text>
        </View>
        <View className="flex items-start w-full h-2 bg-gray-200 rounded-full">
          <View
            className="w-1/2 h-2 rounded-full "
            style={{ backgroundColor: theme.colors.darkPrimary }}
          />
        </View>
        <View className="flex-row items-center space-x-1">
          <Text className="text-xs">
            <Text
              style={{ color: theme.colors.black }}
              className="font-semibold"
            >
              {"579"}{" "}
            </Text>
            Donations
          </Text>
        </View>
        <View className="pt-2 flex-col items-start">
          <Pressable
            onPress={() => navigation.navigate("Donation")}
            style={{ backgroundColor: theme.colors.darkPrimary }}
            className="px-5 py-2 rounded-full  "
          >
            <Text className="text-center text-white">Select NGO</Text>
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

export default DonationCard;

const styles = StyleSheet.create({});
