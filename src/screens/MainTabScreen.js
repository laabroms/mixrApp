import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen, NotificationsScreen } from './NotificationsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ProfileScreen } from './ProfileScreen';
import { StatusBar } from 'expo-status-bar';
import { MessagesScreen } from './MessagesScreen';
import EditProfileScreen from './EditProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessagesStack = createStackNavigator();

const MainTabScreen = () => {

  const { colors } = useTheme();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: colors.background }}
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
          component={MessagesStackScreen}
          options={{
            tabBarLabel: "Messages",
            tabBarColor: "#f008e8",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-text" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#08f065",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};


export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {

  const { colors } = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
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
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );};


const NotificationsStackScreen = ({ navigation }) => {

  const {colors} = useTheme();

  return (
    <NotificationsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
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
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </NotificationsStack.Navigator>
  );};

const MessagesStackScreen = ({ navigation }) => {
  const {colors} = useTheme();

  return (
    <MessagesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <MessagesStack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Messages",
          //     <Image
          //         source = {require('../images/logoFullDark.png')}
          //         style={{width:'3%',height: 20, margin: '10%'}}
          // />,
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </MessagesStack.Navigator>
  );
    };

const ProfileStackScreen = ({ navigation }) => {
  
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0
        },
        headerTintColor: colors.text,
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          //     <Image
          //         source = {require('../images/logoFullDark.png')}
          //         style={{width:'3%',height: 20, margin: '10%'}}
          // />,
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor= {colors.background}
              color= {colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor = {colors.background}
              color = {colors.text}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
            />
          ),
        }}
      />
      <ProfileStack.Screen 
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile'
        }}
      />
    </ProfileStack.Navigator>
)};