import React from 'react';

import { View, Text, TouchableOpacity, ImageBackground, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from "react-native-image-crop-picker";



const EditProfileScreen = () => {
    const {colors} = useTheme();

    renderInner = () => (
      <View style={styles.panel}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={()=> this.bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
        
    

    renderHeader = () => (
      <View style={{ padding: 20, backgroundColor: "#FFFFFF", paddingTop: 20 }}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}></View>
        </View>
      </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);

    return (
      <View style={styles.container}>
        <BottomSheet 
            ref={this.bs}
            snapPoints={[330, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
            
        />
        <Animated.View style={{ margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(this.fall,1.0)), }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={require("../images/user-picture.png")}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="camera" size={35} color="#fff" />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text
              style={[
                { marginTop: 10, fontSize: 18, fontWeight: "bold" },
                { color: colors.text },
              ]}
            >
              Lucas Abroms
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="phone" color={colors.text} size={20} />
            <TextInput
              placeholder="Phone"
              keyboardType='number-pad'
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="globe" color={colors.text} size={20} />
            <TextInput
              placeholder="Country"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="map-marker" color={colors.text} size={20} />
            <TextInput
              placeholder="City"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={()=> {}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fff'
  },
  commandButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#f03e08",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#f03e08",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});