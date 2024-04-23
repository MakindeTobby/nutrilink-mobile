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

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar barStyle={"dark-content"} />

      <Image
        source={require("../assets/images/bag.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.7)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0.6)",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        {/* Content */}
        {/* */}

        <View style={styles.contentContainer}>
          <Image
            source={require("../assets/logo/nutri-logo.png")}
            className="w-16 h-16 "
          />
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
            className="text-white text-left"
          >
            Get Started
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchline}
            className="text-white"
          >
            Let’s curb food wastage while solving hunger problems in Oyo State
            one at a time.
          </Animated.Text>
          <View style={styles.btnContainer}>
            <Animated.View entering={FadeInDown.delay(600).springify()}>
              <Pressable
                style={styles.emailButton}
                className="rounded-full"
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={styles.startText}
                  className="text-center text-white"
                >
                  Continue with email
                </Text>
              </Pressable>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).springify()}>
              <Pressable
                style={styles.startButton}
                className="rounded-full"
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.startText} className="text-center">
                  Continue with phone
                </Text>
              </Pressable>
            </Animated.View>
          </View>
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

  contentContainer: {
    paddingHorizontal: 30,
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
  },
  title: {
    fontSize: hp(4),
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(2.3),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  btnContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
  emailButton: {
    marginBottom: 10,
    backgroundColor: theme.colors.darkPrimary,
    padding: 15,
    width: wp(85),
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.white,
    padding: 15,
    width: wp(85),
  },
  startText: {
    fontSize: hp(2.2),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});
export default GetStartedScreen;
