import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  
} from "react-native";

import { useTheme } from "@react-navigation/native";


import { IconButton } from "../components/IconButton";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as firebase from "firebase";

import { AuthContext } from "../components/context";
import AsyncStorage from "@react-native-community/async-storage";


export function SignUp({ navigation }) {
  
  const { colors } = useTheme();

  
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    passMatch: true,
    isValidPassword: true,
    isValidEmail: true,
    errorMessage: '',
  });

  const { signUp } = React.useContext(AuthContext);


  const textInputChange = (val) => {
     var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (emailFormat.test(val)) {
       setData({
         ...data,
         email: val,
         check_textInputChange: true,
         isValidEmail: true
       });
     } else {
       setData({
         ...data,
         email: val,
         check_textInputChange: false,
         isValidEmail: false
       });
     }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  }

  const handleConfirmPasswordChange = (val) => {
      setData({
        ...data,
        confirmPassword: val,
      });
    }
    
  

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

   const checkPassMatch = (val) => {
     setData({
       ...data,
       confirmPassword: val
     })
    if (data.password !== data.confirmPassword) {
      setData({
        ...data,
        passMatch: false,
      });
    } else{
      setData({
        ...data,
        passMatch: true,
      })
    }
   }
   

  const registerHandle = (email, password) => {
    if (data.passMatch == false) {
      setData({
        ...data,
        errorMessage: "Your passwords must match."
      })
    } 
    
    else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          setData({
            ...data,
            errorMessage: error.message,
          });
        })
        .then(function () {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {});
        });

      signUp(email);
    }
    
    


    
  }


  

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
        <Text style={[styles.text_header, {color:colors.background}]}>Register Now!</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={[styles.bottom, {backgroundColor:colors.background}]}>
        <Text style={[styles.text_footer, {color:colors.text}]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Your Email"
            style={[styles.textInput, {color:colors.text}]}
            autoCapitalize="none"
            placeholderTextColor="#787878"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#1bf723" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be valid.</Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, { marginTop: 35 },{color:colors.text}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color={colors.text}
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Your Password"
            style={[styles.textInput,{color:colors.text}]}
            autoCapitalize="none"
            placeholderTextColor="#787878"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={colors.text} size={20} />
            ) : (
              <Feather name="eye" color={colors.text} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be at least 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, { marginTop: 35 },{color:colors.text}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color={colors.text}
            size={20}
            style={{ paddingBottom: 5 }}
          />
          <TextInput
            placeholder="Confirm Your Password"
            style={[styles.textInput, {color:colors.text}]}
            autoCapitalize="none"
            placeholderTextColor="#787878"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
            onEndEditing={(val) => checkPassMatch(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color={colors.text} size={20} />
            ) : (
              <Feather name="eye" color={colors.text} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* {data.passMatch ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Passwords must match.</Text>
          </Animatable.View>
        )} */}

        <Animatable.View animation="fadeIn" duration={500}>
          <Text style={styles.error}>{data.errorMessage}</Text>
        </Animatable.View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              registerHandle(data.email, data.password);
            }}
          >
            <Text style={[styles.textSign,]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNew}>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.textSignNew}>
              Already have an account? Sign in here!
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08c2f0",
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
    backgroundColor: "#d9dbde",
    // alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#4f4f4f",
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
    borderBottomColor: "#4f4f4f",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#4f4f4f",
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
    // borderColor: "#4f4f4f",
    // borderWidth: 1,
    backgroundColor: "#f03e08",
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
    color: "#f03e08",
  },
  errorMsg: {
    color: "red",
    fontWeight: "bold",
    paddingTop: 2,
  },
  error: {
    color: "red",
    paddingTop: 10,
    fontWeight: "bold",
  },
});
