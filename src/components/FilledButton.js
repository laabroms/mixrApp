import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export function FilledButton({ title, style, onPress }) {
    return (
        <View style={styles.width}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={styles.text}>{title.toUpperCase()}</Text>
            </TouchableOpacity>

        </View>
    );
}




const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f03e08',
        width: '100%',
        padding: 18,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20

    },



    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    // width: {
    //     paddingLeft: 30,
    //     paddingRight: 30,

    // }


});
