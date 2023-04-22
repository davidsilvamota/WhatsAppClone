import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconModel from "../components/atoms/IconModel";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import { colors } from "../utils/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(props) => {
          return {
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerLargeStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: "white" },
          };
        }}
        initialRouteName="WhatsApp"
      >
        <Stack.Screen
          options={(props) => {
            return {
              headerRight: () => (
                <>
                  <IconModel
                    icon={<MaterialIcons name="search" />}
                    tintColor={"white"}
                    size={6}
                    mr={4}
                  />
                  <IconModel
                    onPress={() => signOut(auth)}
                    icon={<MaterialIcons name="logout" />}
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
  );
}
