import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import Button from "../components/Button";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: wp(7),
            }}
          >
            Log in Or sign up
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.inputLabel}>Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="First & Last name"
              placeholderTextColor={"black"}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.inputLabel}>Email address</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"black"}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <Button
          title="Next"
          filled
          style={{
            marginTop: 10,
            marginBottom: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 14,
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: wp(5) }}>or</Text>
          <View style={styles.line} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightPrimary(0.1),
  },
  inputLabel: {
    fontSize: wp(4.2),
    fontWeight: 400,
    marginVertical: 8,
  },
  inputContainer: {
    width: "100%",
    height: hp(6),
    borderColor: theme.colors.grayBg,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.neutral(0.5),
    marginHorizontal: 10,
  },
});
