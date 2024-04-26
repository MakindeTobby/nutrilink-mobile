import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { wp } from "../helpers/common";
import FlashDealCard from "./cards/FlashDealCard";

const FlashDeal = ({ title, description, restaurants }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center ">
        <View>
          <Text className="font-medium" style={{ fontSize: wp(6) }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{ color: theme.colors.neutral(0.8) }}
            className="font-normal"
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          {
            //   paddingHorizontal: 15,
          }
        }
        className="overflow-visible py-5 "
      >
        {/* {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })} */}
        <FlashDealCard />
        <FlashDealCard />
      </ScrollView>
    </View>
  );
};

export default FlashDeal;
