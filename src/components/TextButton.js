import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export function TextButton({ title, style, onPress }) {
    return (
        <View style={styles.width}>
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <Text style={styles.text}>{title.toUpperCase()}</Text>
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
        borderWidth: 1,
        borderColor: '#f03e08'
    },
    text: {
        color: '#f03e08',
        fontWeight: 'bold',
        fontSize: 18,
    },
   

});
