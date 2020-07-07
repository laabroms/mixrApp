import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { SettingsScreen } from './src/screens/SettingsScreen';
import { BookmarkScreen } from "./src/screens/BookmarkScreen";
import { SupportScreen } from "./src/screens/SupportScreen";

import { RootStackScreen } from './src/navigators/RootStackScreen'; 
import { DrawerContent } from './src/screens/DrawerContent';
import { AuthContext } from './src/components/context';
import MainTabScreen from './src/screens/MainTabScreen';

import {Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDvczf_yPQaIwSaC4L3zu0k9jtSsF36RSQ",
  authDomain: "mixr-2a264.firebaseapp.com",
  databaseURL: "https://mixr-2a264.firebaseio.com",
  projectId: "mixr-2a264",
  storageBucket: "mixr-2a264.appspot.com",
  messagingSenderId: "194216621225",
  appId: "1:194216621225:web:ab6b7950c8af767637e5b8",
  measurementId: "G-KM4XB49Y16",
};


if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig); }

const Drawer = createDrawerNavigator();



export default function App() {
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#e8e8e8',
      text: '#333333',
    }
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#e8e8e8'
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [state, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(email) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const userToken = firebase.auth().currentUser.uid;
          AsyncStorage.setItem("userToken", userToken);
          dispatch({ type: "LOGIN", id: email, token: userToken });
        } 
      })
    
    },


    signOut: async() => {
      firebase.auth().signOut();
      try {
        await AsyncStorage.removeItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "LOGOUT"});
    },


    signUp: async(email) => {
      try {
         firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          
          const userToken = firebase.auth().currentUser.uid;
          AsyncStorage.setItem("userToken", userToken);
          dispatch({ type: "Register", id: email, token: userToken });        
        } 
      });
      } catch(e) {
        console.log(e);
      }
       
    
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme);
    },


  }), []);


  useEffect(()=> {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken= null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);


  if ( state.isLoading ) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }


  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {state.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
