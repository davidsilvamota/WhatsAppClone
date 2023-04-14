import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./src/screens/ChatScreen";
import { NativeBaseProvider, Image } from "native-base";
import IconModel from "./src/components/atoms/IconModel";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Chat">
          <Stack.Screen
            options={(props) => {
              return {
                headerTitleStyle: { color: "white" },
                headerStyle: { backgroundColor: "green" },
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
            component={ChatScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
