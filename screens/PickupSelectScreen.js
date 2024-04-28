import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PickupSelectScreen = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  //   const [location, setLocation] = useState(null);
  //   const [errorMsg, setErrorMsg] = useState(null);

  //   useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         setErrorMsg("Permission to access location was denied");
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //     })();
  //   }, []);

  //   let text = "Waiting..";
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location);
  //     console.log(text);
  //   }

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 7.42108,
        longitudeDelta: 3.88642,
      });
    };

    getLocation();
  }, []);

  //   const { width, height } = props;
  //   const ASPECT_RATIO = width / height;
  //   const LATITUDE_DELTA = 8; //Very high zoom level
  //   const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  // const userCoords={{
  //    latitude: number,
  //    longitude: number
  // }};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          <BackButton />
          <View className="gap-2">
            <Text style={styles.headerText}>Enter pickup address</Text>
            <Text>
              Your current location has been added, feel free to change it if
              you want to
            </Text>
          </View>

          {/* <MapView
            initialRegion={{
              latitude: 51.1657,
              longitude: 10.4515,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            loadingEnabled
            minZoomLevel={3}
            maxZoomLevel={10}
            showsIndoors={false}
            showsTraffic={false}
            showsBuildings={false}
            showsScale={true}
            className="flex-1 border h-24 rounded-lg"
            style={{ height: hp(60) }}
            mapType="standard"
          >
            <UrlTile
             
              urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
              
              maximumZ={10}
              
              flipY={false}
            />
            <Marker
              coordinate={{
                latitude: 51.1657,
                longitude: 10.4515,
              }}
              pinColor={theme.colors.darkPrimary}
            ></Marker>
          </MapView> */}

          {initialRegion && (
            <MapView
              //   style={styles.map}
              loadingEnabled
              minZoomLevel={3}
              maxZoomLevel={10}
              showsIndoors={false}
              showsTraffic={false}
              showsBuildings={false}
              showsScale={true}
              className="flex-1 border h-24 rounded-lg"
              style={{ height: hp(60) }}
              mapType="standard"
              initialRegion={initialRegion}
            >
              {currentLocation && (
                <Marker
                  coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  }}
                  pinColor={theme.colors.darkPrimary}
                  title="Your Location"
                />
              )}
            </MapView>
          )}

          <Button
            onPress={() => navigation.navigate("DonationSummary")}
            title="Next"
            filled
            style={{
              marginTop: 10,
              marginBottom: 4,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickupSelectScreen;

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

  headerText: {
    fontSize: hp(2.5),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
