import React from 'react';
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { signOut, toggleTheme } = React.useContext(AuthContext);


   const paperTheme = useTheme();



    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={require("../images/user-picture.png")}
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>Lucas Abroms</Title>
                  <Caption style={styles.caption}>@laabroms</Caption>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    214M
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    80
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {props.navigation.navigate("Home");}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {props.navigation.navigate('Profile')}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="bookmark-outline" color={color} size={size} />
                )}
                label="Bookmarks"
                onPress={() => {props.navigation.navigate("BookmarkScreen");}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {props.navigation.navigate("SettingsScreen");}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {props.navigation.navigate("SupportScreen");}}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => {signOut()}}
          />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex:1
    },
    userInfoSection: {
        paddingLeft: 20,
        color:'#fff'
    },
    title: {
        fontSize: 16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption: {
        fontSize:14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems:'center',
    },
    section: {
        flexDirection:'row',
        alignItems:'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight:3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal:16,
    },

});
