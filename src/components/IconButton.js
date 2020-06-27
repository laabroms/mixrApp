import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export function IconButton({ name, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} style={{ fontSize: 25 }} color={'#f03e08'} />
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({
    container: {},



});
