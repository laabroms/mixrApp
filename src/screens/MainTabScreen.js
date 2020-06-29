import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen, NotificationsScreen } from './NotificationsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ProfileScreen } from './ProfileScreen';
import { StatusBar } from 'expo-status-bar';
import { MessagesScreen } from './MessagesScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const MainTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: "#f03e08" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarColor: "#f03e08",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#08f065",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStackScreen}
          options={{
            tabBarLabel: "Notifications",
            tabBarColor: "#08c2f0",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessagesScreen}
          options={{
            tabBarLabel: "Messages",
            tabBarColor: "#f008e8",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-text" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};


export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f03e08",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f03e08"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);


const NotificationsStackScreen = ({ navigation }) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#08c2f0",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationsStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        title: "Notifications",
        //     <Image
        //         source = {require('../images/logoFullDark.png')}
        //         style={{width:'3%',height: 20, margin: '10%'}}
        // />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#08c2f0"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </NotificationsStack.Navigator>
);