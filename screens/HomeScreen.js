import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { hp, wp } from "../helpers/common";
import * as Icon from "react-native-feather";
import { theme } from "../constants/theme";
import ActionCard from "../components/cards/ActionCard";
import NGOrequest from "../components/NGOrequestRow";
import FlashDeal from "../components/FlashDealRow";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <View className="gap-2">
            <Text style={styles.headerText}>Hello, Sunday</Text>
            <Text>Another day to be world-class, isn’t it?</Text>
          </View>

          <Pressable>
            <Icon.Menu
              height="25"
              width="25"
              strokeWidth={2.5}
              stroke={theme.colors.black}
            />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
            gap: 20,
          }}
        >
          <View className="flex-row items-center p-3 bg-white rounded-md border border-gray-300">
            <TextInput
              placeholderTextColor={theme.colors.neutral(0.8)}
              placeholder="Search food, NGOs, food banks...."
              className="ml-2 flex-1"
            />
            <Icon.Search height="25" width="25" stroke="gray" />
          </View>
          <View>
            <Text style={styles.title}>
              Don’t waste that food,{" "}
              <Text
                className="font-extrabold"
                style={{
                  color: theme.colors.darkPrimary,
                }}
              >
                donate it today
              </Text>
            </Text>
          </View>
          <View className=" gap-2">
            <View className="h-0.5  bg-black/10  w-100" />
            <View className="flex-row justify-between items-center">
              <View className="">
                <Image
                  source={require("../assets/images/Recyclable.png")}
                  className="w-15 h-15"
                />
              </View>
              <View className="w-2/4">
                <Text>DONATE MORE, SCORE POINTS & EARN REWARDS</Text>
              </View>
              <Pressable
                style={{ backgroundColor: theme.colors.secondary }}
                className="bg-gray-300 p-3 rounded-full  "
              >
                <Text className="text-center text-white">My Progress</Text>
              </Pressable>
            </View>
          </View>

          <View style={{ marginVertical: wp(2) }}>
            <ActionCard
              image={require("../assets/icons/food.png")}
              mainText={"Make Food Donation"}
              subText={"Share your surplus to those in need"}
              link={"Donation"}
            />
            <ActionCard
              image={require("../assets/icons/bino.png")}
              mainText={"Find Good Deals Nearby"}
              subText={"Find cheaper food prices nearby"}
              link={"Donation"}
            />
            <ActionCard
              image={require("../assets/icons/target.png")}
              mainText={"Track Donations"}
              subText={"See the impact you’ve made"}
              link={"Donation"}
            />
          </View>
          <NGOrequest title="NGOs Requests" />
          <FlashDeal title="Flash deals for you" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightPrimary(0.1),
    paddingTop: StatusBar.currentHeight,
  },
  mainContent: {
    marginHorizontal: wp(5),
    gap: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: wp(2),
  },
  headerText: {
    fontSize: hp(2.3),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  title: {
    fontSize: hp(3.4),
    color: theme.colors.neutral(0.9),
  },
});
