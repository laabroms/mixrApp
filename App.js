import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
// import * as firebase from 'firebase';



// var firebaseConfig = {
//   apiKey: "AIzaSyDvczf_yPQaIwSaC4L3zu0k9jtSsF36RSQ",
//   authDomain: "mixr-2a264.firebaseapp.com",
//   databaseURL: "https://mixr-2a264.firebaseio.com",
//   projectId: "mixr-2a264",
//   storageBucket: "mixr-2a264.appspot.com",
//   messagingSenderId: "194216621225",
//   appId: "1:194216621225:web:ab6b7950c8af767637e5b8",
//   measurementId: "G-KM4XB49Y16",
// };


// firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();


export default function App() {




  return (
    <NavigationContainer>
      <Stack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen

          name="LoadingScreen"
          component={LoadingScreen}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>


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
