import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button onPress={() => console.log("hello world")}>Click Me</Button>
    </View>
  );
}
