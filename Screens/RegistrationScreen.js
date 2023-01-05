import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  // Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  //   console.log(Platform.OS, "---Platform.OS");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textInputPassBtn, setTextInputPassBtn] = useState("Показати");
  const [inputFocus, setInputFocus] = useState(false);
  const [state, setState] = useState(initialState);
  // const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  // useEffect(() => {
  //   const onChange = () => {
  //     const windowWidth = Dimensions.get("window").width;
  //     // console.log(windowWidth, "---windowWidth");
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);
  const onFocusInput = () => {
    setInputFocus(true);
  };
  const keyboardHide = () => {
    setInputFocus(false);
    Keyboard.dismiss();
  };
  const onPressBtnPass = () => {
    setSecureTextEntry((prevState) => !prevState);
    setTextInputPassBtn((prevState) => {
      if (prevState === "Показати") return "Сховати";
      if (prevState === "Сховати") return "Показати";
    });
  };
  const onSubmitForm = () => {
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/mountains-bg.jpg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ ...styles.form, paddingBottom: inputFocus ? 32 : 78 }}>
            <View style={styles.userImage}>
              <TouchableOpacity style={styles.btnAddUserImage}>
                <Text style={styles.btnAddUserImage_text}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={styles.inputContainer}>
              <TextInput
                onFocus={onFocusInput}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
                value={state.name}
                style={styles.input}
                placeholder="Логін"
              />
              <TextInput
                onFocus={onFocusInput}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />
              {/* </View>
      <View style={{ marginTop: 20 }}> */}
              {/* <Text style={styles.inputTitle}>PASSWORD</Text> */}
              <View style={styles.inputPassCont}>
                <TextInput
                  onFocus={onFocusInput}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  value={state.password}
                  style={{ ...styles.input, marginBottom: 0 }}
                  //   textAlign={"center"}
                  secureTextEntry={secureTextEntry}
                  placeholder="Пароль"
                />
                <TouchableOpacity
                  onPress={onPressBtnPass}
                  activeOpacity={0.7}
                  style={styles.btnPassword}
                >
                  <Text style={styles.btnPassText}>{textInputPassBtn}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <Button style={styles.btnRegister} title="Зараєструватись" /> */}

            {!inputFocus && (
              <TouchableOpacity
                onPress={onSubmitForm}
                activeOpacity={0.7}
                style={styles.btnRegister}
              >
                <Text style={styles.btnText}>Зареєструватись</Text>
              </TouchableOpacity>
            )}
            {!inputFocus && (
              <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin}>
                <Text style={styles.btnLogin_text}>Вже є аккаунт? Увійти</Text>
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },

  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAddUserImage: {
    position: "absolute",
    bottom: 14,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: "50%",
    width: 25,
    height: 25,
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  btnAddUserImage_text: {
    fontSize: 18,
    color: "#FF6C00",
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    width: "100%",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  formTitle: {
    marginBottom: 33,
    fontSize: 30,
    fontWeight: "500",
    // fontFamily: "Roboto-Bold",
    // fontFamily: "Roboto-Regular",
    // fontFamily: "Sevillana-Regular",
  },
  inputContainer: {
    width: "100%",
  },
  inputPassCont: {
    position: "relative",
  },
  btnPassword: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 16,
  },
  btnPassText: {
    fontSize: 16,
    color: "#1B4371",
  },

  btnRegister: {
    marginTop: 30,
    marginBottom: 16,
    height: 51,
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  btnLogin: {
    // backgroundColor: "orange",
  },
  btnLogin_text: {
    fontSize: 16,
    color: "#1B4371",
  },
  //   inputTitle: {
  //     color: "#f0f8ff",
  //     marginBottom: 10,
  //     fontSize: 18,
  //   },
});
