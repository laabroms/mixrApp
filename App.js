import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailsScreen } from "./src/screens/NotificationsScreen";
import { SettingsScreen } from './src/screens/SettingsScreen';
import { BookmarkScreen } from "./src/screens/BookmarkScreen";
import { SupportScreen } from "./src/screens/SupportScreen";

import { RootStackScreen } from './src/navigators/RootStackScreen'; 
import { DrawerContent } from './src/screens/DrawerContent';
import { AuthContext } from './src/components/context';
import MainTabScreen from './src/screens/MainTabScreen';
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


// if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig); }

const Drawer = createDrawerNavigator();



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));


  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  if ( isLoading ) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
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
