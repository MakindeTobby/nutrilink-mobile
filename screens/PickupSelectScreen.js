import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import MapView, { UrlTile, Marker } from "react-native-maps";
import Button from "../components/Button";

const PickupSelectScreen = () => {
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

          <MapView
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
              /**
               * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
               * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
               */
              urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
              /**
               * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
               * MKTileOverlay. iOS only.
               */
              maximumZ={10}
              /**
               * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
               * to be used. Its default value is false.
               */
              flipY={false}
            />
            <Marker
              coordinate={{
                latitude: 51.1657,
                longitude: 10.4515,
              }}
              pinColor={theme.colors.darkPrimary}
            ></Marker>
          </MapView>

          <Button
            // onPress={() => navigation.navigate("Pickup")}
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
});
