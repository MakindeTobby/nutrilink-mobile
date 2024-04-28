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
import * as Icon from "react-native-feather";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const AwaitingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" p-4">
          <BackButton />
        </View>
        <View style={styles.mainContent}>
          <View className="gap-2">
            <Text style={styles.headerText}>
              St. Mary Orphanage will be on their way to pick up your donation.
            </Text>
          </View>
          <View>
            <Text className="text-lg font-light">
              Once they pick it up, you’ll earn 5 more{" "}
              <Text className="font-medium">Nutri-Points</Text>
            </Text>
          </View>
          <View
            style={{ borderRadius: theme.radius.xl, marginVertical: hp(6) }}
            className="bg-white flex-1 "
          >
            <View style={styles.content}>
              <View className="p-4 space-y-2">
                <View className="gap-2">
                  <Text>
                    You can contact{" "}
                    <Text className="font-bold">St. Mary Orphanage</Text> here
                  </Text>
                </View>
                <View className="flex-row gap-4 items-center">
                  <View
                    className="p-4 rounded-md"
                    style={{ backgroundColor: theme.colors.neutral(0.1) }}
                  >
                    <Icon.Phone
                      height="25"
                      width="25"
                      strokeWidth={2.5}
                      fill={theme.colors.black}
                      stroke={theme.colors.neutral(0.1)}
                    />
                  </View>

                  <Text className="font-semibold" style={{ fontSize: hp(3.6) }}>
                    08012312312
                  </Text>
                </View>
                <View className="flex-row gap-4 items-center">
                  <View
                    className="p-4 rounded-md"
                    style={{ backgroundColor: theme.colors.neutral(0.1) }}
                  >
                    <Icon.Globe
                      height="25"
                      width="25"
                      strokeWidth={2.5}
                      stroke={theme.colors.black}
                    />
                  </View>

                  <Text className="" style={{ fontSize: hp(3) }}>
                    stmaryorph.com
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Button
            onPress={() => navigation.navigate("Thanks")}
            title="Next"
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
              I want to track them
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AwaitingScreen;

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
    fontSize: hp(3),
    fontWeight: 500,
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
