import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { LoadingScreen } from "../screens/LoadingScreen";
import { SignInScreen } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";


const Stack = createStackNavigator();


export function RootStackScreen({navigation}) {
    return (
      <Stack.Navigator
        // mode={"modal"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
}