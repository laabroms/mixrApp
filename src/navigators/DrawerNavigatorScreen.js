import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import  MainTabScreen  from "../screens/MainTabScreen";
import { SupportScreen } from "../screens/SupportScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { BookmarkScreen } from "../screens/BookmarkScreen";


const Drawer = createStackNavigator();

export function DrawerNavigatorScreen({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Drawer.Navigator>
  );
}
