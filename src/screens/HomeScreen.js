import React from "react";

import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";


export function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content'/>
        <Text>Home</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }



})