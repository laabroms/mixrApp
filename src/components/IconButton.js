import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";

export function IconButton({ name, style, onPress }) {
        const { colors } = useTheme();

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} style={{ fontSize: 25 }} color={colors.background} />
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({
    container: {},



});
