import React from 'react';

import { View, Button, Image, StyleSheet } from 'react-native';

import ImagePicker from 'react-native-image-picker';

const ImagePicker = ({image, onImagePicked}) => {


    pickImageHandler = () => {
        ImagePicker.showImagePicker({title: 'Pick an Image', maxWidth: 800, maxHeight: 600},
        response => {
            if (response.error) {
                console.log("image error");
            }
            else {
                console.log("Image: " + response.uri)
                onImagePicked({uri: response.uri})
            }
        }
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={} />
            </View>
            <View style={styles.button}>
                <Button title="Upload image" onPress={this.pickImageHandler}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'center'
    },

    imageContainer: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        height: 150
    },

    button: {
        margin: 8,
    }

})