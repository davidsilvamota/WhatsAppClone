import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { NativeBaseProvider, Image } from "native-base";
import IconModel from "./src/components/atoms/IconModel";
import { colors } from "./src/utils/colors/colors";

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
                headerStyle: { backgroundColor: colors.primary },
                headerBackTitleVisible: false,
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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
