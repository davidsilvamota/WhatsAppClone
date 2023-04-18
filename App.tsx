import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { NativeBaseProvider, Image } from "native-base";
import IconModel from "./src/components/atoms/IconModel";
import { colors } from "./src/utils/colors/colors";
import ChatScreen from "./src/screens/ChatScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerLargeStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: "white" },
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            options={(props) => {
              return {
                headerRight: () => (
                  <>
                    <IconModel
                      icon={require("./src/utils/icons/search.png")}
                      tintColor={"white"}
                      size={6}
                      mr={4}
                    />
                    <IconModel
                      icon={require("./src/utils/icons/more-vert.png")}
                      tintColor={"white"}
                      size={6}
                    />
                  </>
                ),
              };
            }}
            name="WhatsApp"
            component={HomeScreen}
          />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
