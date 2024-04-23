import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreenThree = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../assets/images/smiley-woman.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(13, 73, 52, 1)",
            "rgba(13, 73, 52, 0.8)",
            "rgba(0, 0, 0, 0.45)",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        {/* Content */}
        <View style={styles.contentContainerOne}>
          <View className="flex-row justify-around items-center ">
            <View className="flex-row gap-4 justify-between items-center">
              <Animated.View
                entering={FadeInRight.delay(200)
                  .duration(1000)
                  .springify()
                  .damping(14)}
                style={styles.line}
                className=" bg-white rounded-lg"
              ></Animated.View>
              <Animated.View
                entering={FadeInRight.delay(300)
                  .duration(1000)
                  .springify()
                  .damping(14)}
                style={styles.line}
                className=" bg-white rounded-lg"
              ></Animated.View>
              <Animated.View
                entering={FadeInRight.delay(500)
                  .duration(1000)
                  .springify()
                  .damping(14)}
                style={styles.line}
                className=" bg-white rounded-lg"
              ></Animated.View>
            </View>
            <Text className="text-white ml-4 text-lg">Skip</Text>
          </View>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
            className="font-extrabold"
          >
            DON’T MISS GREAT RESTAURANT DEALS, THE BEST FLASH SALES
          </Animated.Text>
        </View>
        <View style={styles.contentContainer}>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable
              style={styles.startButton}
              className="rounded-full"
              onPress={() => navigation.navigate("GetStarted")}
            >
              <Text style={styles.startText} className="text-center">
                Next
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(100),
    bottom: 0,
    position: "absolute",
  },
  line: {
    width: wp(20),
    height: hp(0.5),
  },
  contentContainerOne: {
    paddingTop: 90,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 35,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(3),
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.white,
    padding: 15,
    width: wp(80),
  },
  startText: {
    color: "black",
    fontSize: wp(5),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});
export default OnboardingScreenThree;
