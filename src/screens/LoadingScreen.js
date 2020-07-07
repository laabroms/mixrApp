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
import { useTheme } from '@react-navigation/native';
import { ImageLoader } from '../components/ImageLoader';
import * as Animatable from "react-native-animatable";



export function LoadingScreen({navigation}) {

    const { colors } = useTheme();
    const theme = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: colors.background} ]}>
       
            <View style={styles.top}>
                <ImageLoader 
                    source={theme.dark ? require('../images/logoFullLight.png') : require('../images/logoFullDark.png')}
                    style={styles.logo}
                />
            </View>
       
            <Animatable.View animation='bounceInUp' style={styles.bottom}>
                
                <TouchableOpacity 
                    style={styles.signUp}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.signUpText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.signInText}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                

            </Animatable.View>

        </View>

    )



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        backgroundColor:'#fff'
    },
    logo: {
        width: '100%',
        height: 100,
       
       
        
    },
    top: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight:'10%'

    },
    bottom: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%'
    },
    signUp: {
        backgroundColor: '#f03e08',
        width: '100%',
        padding: 18,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    signUpText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signIn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#f03e08'
    },
    signInText: {
        color: '#f03e08',
        fontWeight: 'bold',
        fontSize: 18,
    }
    
});
