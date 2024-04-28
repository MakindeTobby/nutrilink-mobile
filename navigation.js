import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import OnboardingScreenTwo from "./screens/OnboardingTwo";
import OnboardingScreenThree from "./screens/OnboarddingThree";
import GetStartedScreen from "./screens/GetStartedScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import FoodDonation from "./screens/FoodDonation";
import PickupSelectScreen from "./screens/PickupSelectScreen";
import DonationSummary from "./screens/DonationSummaryScreen";
import ThankYou from "./screens/ThankYouScreen";
import AwaitingScreen from "./screens/AwaitingScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="OnboardTwo" component={OnboardingScreenTwo} />
        <Stack.Screen name="OnboardThree" component={OnboardingScreenThree} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donation" component={FoodDonation} />
        <Stack.Screen name="Pickup" component={PickupSelectScreen} />
        <Stack.Screen name="DonationSummary" component={DonationSummary} />
        <Stack.Screen name="Thanks" component={ThankYou} />
        <Stack.Screen name="Awaiting" component={AwaitingScreen} />
        {/* <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
