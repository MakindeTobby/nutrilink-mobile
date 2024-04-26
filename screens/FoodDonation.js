import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import DonationCard from "../components/cards/DonationCard";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "expo-checkbox";
import BackButton from "../components/BackButton";

const FoodDonation = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isChecked, setChecked] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImages(result.assets);
    }
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleDateConfirm = (selectedDate) => {
    setDate(new Date(selectedDate).toLocaleDateString());
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (selectedTime) => {
    setTime(new Date(selectedTime).toLocaleTimeString());
    setTimePickerVisibility(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          <BackButton />
          <View className="gap-2">
            <Text style={styles.headerText}>Select NGO nearest to you</Text>
            <Text>Select NGO nearest to you to make donation to?</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              {
                //   paddingHorizontal: 15,
              }
            }
            className="overflow-visible py-4 "
          >
            {/* {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })} */}
            <DonationCard />
            <DonationCard />
          </ScrollView>
          <View>
            <Text style={styles.headerText}>Enter donation details</Text>
            <View style={{ marginBottom: 12 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Food Type"
                  placeholderTextColor={"black"}
                  keyboardType="default"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Food Quantity"
                  placeholderTextColor={"black"}
                  keyboardType="default"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Pickup Day"
                  placeholderTextColor={"black"}
                  keyboardType="default"
                  editable={false}
                  style={{
                    width: "100%",
                  }}
                  value={date}
                />
                <TouchableOpacity
                  className="absolute right-4"
                  onPress={() => setDatePickerVisibility(true)}
                >
                  <Icon.Calendar
                    height="18"
                    width="18"
                    strokeWidth={2.5}
                    stroke={theme.colors.secondary}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={() => setDatePickerVisibility(false)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Pickup Time"
                  placeholderTextColor={"black"}
                  keyboardType="default"
                  editable={false}
                  value={time}
                  style={{
                    width: "100%",
                  }}
                />
                <TouchableOpacity
                  onPress={() => setTimePickerVisibility(true)}
                  className="absolute right-4"
                >
                  <Icon.Clock
                    height="18"
                    width="18"
                    strokeWidth={2.5}
                    stroke={theme.colors.secondary}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={() => setTimePickerVisibility(false)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Pickup Address"
                  placeholderTextColor={"black"}
                  keyboardType="default"
                  style={{
                    width: "100%",
                  }}
                />
              </View>
              <View style={{ marginVertical: hp(2) }}>
                <View className="flex-row gap-2">
                  <Pressable
                    onPress={pickImage}
                    style={[
                      styles.image,
                      { backgroundColor: theme.colors.darkPrimary },
                    ]}
                  >
                    <Icon.Camera
                      height="25"
                      width="25"
                      strokeWidth={2.5}
                      stroke={theme.colors.secondary}
                    />
                  </Pressable>
                  <ScrollView
                    horizontal
                    style={styles.imageContainer}
                    showsHorizontalScrollIndicator={false}
                  >
                    {images.map((image, index) => {
                      return (
                        <View style={styles.image} key={index}>
                          <Image
                            source={{ uri: image.uri }}
                            className="w-full h-full"
                          />
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? theme.colors.darkPrimary : undefined}
                />
                <Text style={styles.paragraph}>
                  I ensure that the donated items are of good hygiene and all
                  all and all
                </Text>
              </View>

              <Button
                onPress={() => navigation.navigate("Pickup")}
                title="Next"
                filled
                style={{
                  marginTop: 10,
                  marginBottom: 4,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDonation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightPrimary(0.1),
    paddingTop: StatusBar.currentHeight,
  },

  inputContainer: {
    marginVertical: 8,
    width: "100%",
    height: hp(6),
    borderColor: theme.colors.grayBg,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    position: "relative",
  },
  mainContent: {
    marginHorizontal: wp(5),
    gap: 12,
  },

  headerText: {
    fontSize: hp(2.5),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: wp(20),
    height: hp(9),
    marginRight: 10,
    borderRadius: theme.radius.md,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: hp(2),
  },
  //   paragraph: {
  //     fontSize: 15,
  //   },
  checkbox: {
    // margin: 8,
  },
});
