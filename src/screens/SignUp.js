import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

import { IconButton } from "../components/IconButton";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { AuthContext } from "../components/context";


export function SignUp({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

   const updateConfirmSecureTextEntry = () => {
     setData({
       ...data,
       confirm_secureTextEntry: !data.confirm_secureTextEntry,
     });
   };


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <IconButton
          style={styles.icon}
          name={"closecircleo"}
          onPress={() => {
            navigation.navigate("LoadingScreen");
          }}
        />
        <Text style={styles.text_header}>Register Now!</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.bottom}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#fff"
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            placeholderTextColor="#DDDDDD"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="white" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color="#fff"
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            placeholderTextColor="#DDDDDD"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="white" size={20} />
            ) : (
              <Feather name="eye" color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color="#fff"
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            placeholderTextColor="#DDDDDD"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color="white" size={20} />
            ) : (
              <Feather name="eye" color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              // navigation.navigate('LoadingScreen')
            }}
          >
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNew}>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.textSignNew}>Already have an account? Sign in here!</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  bottom: {
    flex: 3,
    backgroundColor: "#f03e08",
    // alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  icon: {
    position: "absolute",
    top: 50,
    right: 16,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#fff",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  buttonNew: {
    alignItems: "center",
    marginTop: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
  },
  signUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // borderColor: "#fff",
    // borderWidth: 1,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  textSignNew: {
    fontSize: 15,
    // fontWeight: "bold",
    color: "#fff",
  },
});
