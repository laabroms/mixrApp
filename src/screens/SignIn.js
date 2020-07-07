import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    String
    
} from 'react-native';
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import  Users  from '../model/users';
import { IconButton } from '../components/IconButton';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from "react-native-vector-icons/Feather";
import * as firebase from "firebase";
import { AuthContext } from '../components/context';

export function SignInScreen({ navigation }) {
    
  const { colors } = useTheme();
  const theme = useTheme();

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
        errorMessage: '',
    });
    
    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
         var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (emailFormat.test(val)) {
           setData({
             ...data,
             email: val,
             check_textInputChange: true,
             isValidEmail: true,
           });
         } else {
           setData({
             ...data,
             email: val,
             check_textInputChange: false,
             isValidEmail: false,
           });
         }
    }

    const handlePasswordChange = (val) => {
      if ( val.trim().length >= 8)  {
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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // const handleValidEmail = (val) => {
    //     var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if( val.value.match(emailFormat)) {
    //       setData({
    //         ...data,
    //         isValidEmail: true
    //       });
    //     } else {
    //       setData({
    //         ...data,
    //         isValidEmail: false,
    //       });
    //     }
    // }
    
    const loginHandle = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
          setData({
            ...data,
            errorMessage: error.message
          })

        })
        signIn(email)
      

      
      
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
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text_header, {color:colors.background}]}>Welcome to Mixr!</Text>
            {/* <Image  
            source={require('../images/logoFullDark.png')}
            style={{width:50, height: 10}}
            /> */}
          </View>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.bottom, { backgroundColor: colors.background }]}
        >
          <Text style={[styles.text_footer, { color: colors.text }]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color={colors.text}
              size={20}
              style={{ paddingBottom: 5 }}
            />
            <TextInput
              placeholder="Your Email"
              style={[styles.textInput, { color: colors.text }]}
              autoCapitalize="none"
              placeholderTextColor="#787878"
              onChangeText={(val) => textInputChange(val)}
              // onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
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

          <Text
            style={[
              styles.text_footer,
              { marginTop: 35 },
              { color: colors.text },
            ]}
          >
            Password
          </Text>
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

          <Animatable.View animation="fadeIn" duration={500}>
            <Text style={styles.error}>{data.errorMessage}</Text>
          </Animatable.View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                loginHandle(data.email, data.password);
              }}
            >
              <Text style={[styles.textSign, ]}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonNew}>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.textSignNew}>New to Mixr? Sign up here!</Text>
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
