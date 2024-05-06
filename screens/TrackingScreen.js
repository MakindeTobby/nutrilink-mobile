import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { theme } from "../constants/theme";
import BackButton from "../components/BackButton";

const TrackingScreen = () => {
  const navigation = useNavigation();
  const cancelOrder = () => {
    navigation.navigate("Home");
  };
  return (
    <View className="flex-1 relative">
      {/* map view */}

      <MapView
        loadingEnabled
        showsIndoors={false}
        showsTraffic={false}
        showsBuildings={false}
        showsScale={true}
        initialRegion={{
          latitude: 7.42108,
          longitude: 3.88642,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <View className=" p-4 absolute  top-4 ">
          <BackButton />
        </View>
        <Marker
          coordinate={{
            latitude: 7.42108,
            longitude: 3.88642,
          }}
          title={"Orphanage Home"}
          description={"Here we are"}
          pinColor={theme.colors.darkPrimary}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20 -30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on its way
            </Text>
          </View>
          {/* <Image
            source={require("../assets/images/bikeGuy2.jpg")}
            className="w-16 h-16 transform -scale-x-100"
          /> */}
        </View>
        <View
          style={{ backgroundColor: theme.colors.lightPrimary(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            {/* <Image
              source={require("../assets/images/face2.png")}
              className="w-16 h-16 rotate-[180] rounded-full"
            /> */}
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">
              Suleiman Warris
            </Text>
            <Text className="text-semibold font-bold text-white">
              Your Rider
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={theme.colors.lightPrimary(1)}
                stroke={theme.colors.lightPrimary(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackingScreen;
