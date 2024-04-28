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

const ThankYou = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../assets/images/vegetable.png")}
        style={styles.bgImage}
        resizeMode="cover"
        blurRadius={7}
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.3)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0.6)",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        {/* Content */}
        <View style={styles.contentContainerOne}>
          <View>
            <Animated.Text
              entering={FadeInDown.delay(100).springify()}
              style={styles.title}
              className="font-extrabold"
            >
              Sunday,
            </Animated.Text>
            <Animated.Text
              entering={FadeInDown.delay(400).springify()}
              style={styles.title}
              className="font-extrabold"
            >
              thank you for your donation!
              <Animated.Image
                entering={FadeInRight.delay(600).springify().damping(5)}
                source={require("../assets/icons/clap.png")}
              />
            </Animated.Text>
          </View>
          <Text className="text-white leading-5 text-base">
            Your actions matter. And when you decided to make a food donation to
            those who needed it thereby reducing food waste, you did the right
            thing. Thank you for your commitment.
          </Text>
          <View className="gap-2">
            <Text className="text-white leading-5 text-base">Yours,</Text>
            <Image
              source={require("../assets/logo/nutri-logo.png")}
              className="w-12 h-12 "
            />
            <Text className="text-white font-bold text-xl">NutriLink.</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable
              style={styles.startButton}
              className="rounded-full"
              onPress={() => navigation.navigate("Awaiting")}
            >
              <Text style={styles.startText} className="text-center">
                Tap to Continue
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
    paddingTop: hp(20),
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-start",
    gap: 25,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(5),
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
    padding: 15,
    width: wp(80),
  },
  startText: {
    color: theme.colors.white,

    fontSize: wp(6),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});
export default ThankYou;
