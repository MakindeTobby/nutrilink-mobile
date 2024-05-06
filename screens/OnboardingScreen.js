import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { slides } from "../constants/slides";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const Slide = ({
  item,
  currentSlideIndex,
  skip,
  goToNextSlide,
  navigation,
  index,
}) => {
  return (
    <View style={{ width, height }}>
      <Animated.View
        entering={FadeInDown.duration(index * 600)}
        style={{ flex: 1 }}
      >
        <Image source={item?.image} style={styles.bgImage} resizeMode="cover" />
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

        <View style={styles.contentContainerOne}>
          <View className="flex-row justify-between gap-4 items-center ">
            {/* <View className="flex-row gap-4 justify-between items-center"> */}
            {slides.map((_, index) => (
              <Animated.View
                key={index}
                entering={FadeInRight.delay(200)
                  .duration(index * 1000)
                  .springify()
                  .damping(14)}
                style={[
                  styles.line,
                  currentSlideIndex == index && {
                    backgroundColor: "white",
                  },
                ]}
                className=" bg-white/40 rounded-lg"
              />
            ))}
            {/* </View> */}
            {currentSlideIndex == slides.length - 1 ? (
              <Pressable onPress={skip}>
                <Text className="text-white  text-lg"></Text>
              </Pressable>
            ) : (
              <Pressable onPress={skip}>
                <Text className="text-white  text-lg">Skip</Text>
              </Pressable>
            )}
          </View>
          <Animated.Text
            entering={FadeInDown.delay(index * 400).springify()}
            style={styles.title}
            className="font-extrabold"
          >
            {item?.title}
          </Animated.Text>
        </View>
        <View style={styles.contentContainer}>
          {currentSlideIndex == slides.length - 1 ? (
            <Animated.View entering={FadeInDown.delay(index * 600).springify()}>
              <Pressable
                style={styles.startButton}
                className="rounded-full"
                onPress={() => navigation.navigate("GetStarted")}
              >
                <Text style={styles.startText} className="text-center">
                  Get Started
                </Text>
              </Pressable>
            </Animated.View>
          ) : (
            <Animated.View entering={FadeInDown.delay(index * 600).springify()}>
              <Pressable
                style={styles.startButton}
                className="rounded-full"
                onPress={goToNextSlide}
              >
                <Text style={styles.startText} className="text-center">
                  Next
                </Text>
              </Pressable>
            </Animated.View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const navigation = useNavigation();

  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    // If trying to scroll past the first slide
    if (x < 0) {
      // Force snap back to the start
      ref.current.scrollToOffset({ offset: 0, animated: true });
    }
  };
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View
        style={{ flex: 1, backgroundColor: theme.colors.darkPrimary }}
        className="bg-green-200"
      >
        <FlatList
          ref={ref}
          style={{ flex: 1 }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          pagingEnabled={true}
          data={slides}
          renderItem={({ item, index }) => (
            <Slide
              index={index}
              item={item}
              skip={skip}
              currentSlideIndex={currentSlideIndex}
              goToNextSlide={goToNextSlide}
              navigation={navigation}
            />
          )}
          // onScroll={handleScroll}
          scrollEnabled={currentSlideIndex !== 0}
        />
      </View>
    </>
  );
};

export default Onboarding;

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
    paddingTop: hp(8),
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
