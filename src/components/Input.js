import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


export function Input({ style, ...props }) {
    return (
        <View style={styles.width}>
            <TextInput {...props} style={[styles.input, style]} />
        </View>
    );
}




const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 18,
        borderRadius: 50,
        backgroundColor: '#e8e8e8',
        color: '#f03e08',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 25
    },
    width: {
        paddingLeft: 30,
        paddingRight: 30,

    }

});
