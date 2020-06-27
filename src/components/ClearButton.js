import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export function ClearButton({ title, style, onPress }) {
    return (
        <View style={styles.width}>
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 50,
    },
    text: {
        color: '#f03e08',
        fontWeight: '500',
        fontSize: 14,
    },
    // width: {
    //     paddingLeft: 30,
    //     paddingRight: 30,

    // }


});
