import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  View,
  // ImageBackground,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import AppLoading from "expo-app-loading";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// const loadApplication = async () => {
//   await Font.loadAsync({
//     // "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     // "Sevillana-Regular": require("./assets/fonts/Sevillana-Regular.ttf"),
//   });
// };

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // fontFamily: "Sevillana-Regular",
    // fontFamily: "Roboto-Regular",

    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
