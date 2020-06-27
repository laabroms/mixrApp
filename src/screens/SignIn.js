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

import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Input } from '../components/Input';


export function SignIn({ navigation }) {
    return (
        <View style={styles.container}>

            <IconButton
                style={styles.icon}
                name={'closecircleo'}
                onPress={() => {
                    // navigation.pop();
                    navigation.navigate('LoadingScreen')
                }}
            />

            <View style={styles.top}>
               
            </View>

            <View style={styles.bottom}>
                <Header style={styles.header}>Sign In</Header>
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.signUp}
                >
                    <Text style={styles.signUpText}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.newUser}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.newUserText}>
                        New to Mixr? Click here to sign up
                    </Text>
                </TouchableOpacity>


            </View>

        </View>

    )



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        backgroundColor: '#fff'
    },
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%'

    },
    input: {
        width: '100%',
        padding: 12,
        borderRadius: 50,
        backgroundColor: '#e8e8e8',
        color: '#f03e08',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    bottom: {
        height: '75%',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
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
    header: {
        marginBottom: '10%'
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
    },
    icon: {
        position: 'absolute',
        top: 60,
        right: 16,


    },
    newUser: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 50,
    },
    newUserText: {
        color: '#f03e08',
        fontWeight: '500',
        fontSize: 14,
    }


});
