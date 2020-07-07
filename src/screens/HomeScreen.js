import React from "react";

import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";
import { useTheme } from '@react-navigation/native';

export function HomeScreen({navigation}) {
    
    const {colors} = useTheme();
    
    const theme = useTheme();

    return (
    <View style={styles.container}>
    <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color:colors.text}}>Home</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor: '#fff'
    }



})