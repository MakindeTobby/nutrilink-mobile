import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import * as Location from "expo-location";
// import MapView, { UrlTile, Marker } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const DonationSummary = () => {
  const navigation = useNavigation();
  const DottedLine = () => (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 4,
      }}
    >
      {Array.from(
        { length: 25 },
        (
          _,
          i // Adjust length based on your container width and dot size
        ) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 2,
              backgroundColor: theme.colors.neutral(0.2),
            }}
          />
        )
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white/50 p-4">
          <BackButton
            firstText={
              <Text>
                Donation to{" "}
                <Text className="font-bold">ST. Mary Orphanage</Text>
              </Text>
            }
            secondText={"Estimated to arrive by 2:24PM"}
          />
        </View>
        <View style={styles.mainContent}>
          <View className="gap-2">
            <Text style={styles.headerText}>Donation Summary</Text>
          </View>
          <View
            style={{ borderRadius: theme.radius.xl }}
            className="bg-white flex-1 "
          >
            <View className="p-4 flex-row items-center gap-2 divide-y-2">
              <View style={styles.image}>
                <Image
                  source={require("../assets/images/children.png")}
                  className="w-full h-full"
                />
              </View>
              <Text>
                Donation to{" "}
                <Text className="font-bold">ST. Mary Orphanage</Text>
              </Text>
            </View>
            <View style={styles.content}>
              <DottedLine />
              <View className="p-4 space-y-2">
                <View className="gap-2">
                  <Text>Food Type</Text>

                  <Text className="font-bold">
                    Fruits, Golden Penny Spaghetti
                  </Text>
                </View>
                <View className="gap-2">
                  <Text>Food Quantity</Text>

                  <Text className="font-bold">
                    Fruits: 20 Apples, Spaghetti: 5 Pieces
                  </Text>
                </View>
                <View className="gap-2">
                  <Text>Pickup Day</Text>

                  <Text className="font-bold">Today</Text>
                </View>
                <View className="gap-2">
                  <Text>Pickup Time</Text>

                  <Text className="font-bold">12:50PM</Text>
                </View>
                <View className="gap-2">
                  <Text>Pickup Address</Text>

                  <Text className="font-bold">
                    3, Michael Falode Street, Felele, Rab, Ibadan
                  </Text>
                </View>
              </View>
              <DottedLine />
            </View>
            <View className="p-4 flex-row items-center justify-between divide-y-2">
              <View>
                <Text className="font-semibold text-base">
                  Save as Quick Donation
                </Text>
              </View>
              <Switch />
            </View>
          </View>

          <Button
            onPress={() => navigation.navigate("Thanks")}
            title="Donate Food Items"
            filled
            style={{
              marginTop: 10,
              marginBottom: 4,
            }}
          />
          <Pressable>
            <Text
              className="text-xl text-center mt-3"
              style={{ color: theme.colors.darkPrimary }}
            >
              I want to make changes
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightPrimary(0.1),
    paddingTop: StatusBar.currentHeight,
  },
  mainContent: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    gap: 12,
  },

  headerText: {
    fontSize: hp(2.5),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },

  image: {
    width: wp(13),
    height: hp(6),
    marginRight: 10,
    borderRadius: theme.radius.sm,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  // content: {
  //   borderStyle: "dotted",
  // },
});
