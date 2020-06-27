import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';

export function Header({ children, style, ...props }) {
    return (
        <Text {...props} style={[styles.text, style]}>
            {children}

        </Text>
    );
}




const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        color: 'black',
        fontWeight:'bold'
    }

});
