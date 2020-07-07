import React from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

export function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
});
