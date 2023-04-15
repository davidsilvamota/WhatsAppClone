import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { View, Text, Pressable } from "native-base";
import { colors } from "../utils/colors/colors";
function TabsModel() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box flex={1} width="100%" alignSelf="center">
      <HStack bg={colors.primary} alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          pt={2}
          alignItems="center"
          opacity={selected === 0 ? 1 : 0.5}
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Text color="white" fontSize="16">
              CONVERSAS
            </Text>
          </Center>
          {selected === 0 ? (
            <Divider mt={2} h="0.5" bgColor={"white"} />
          ) : (
            <Divider mt={2} h="0.5" />
          )}
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          pt={2}
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Text color="white" fontSize="16">
              STATUS
            </Text>
          </Center>
          {selected === 1 ? (
            <Divider mt={2} h="0.5" bgColor={"white"} />
          ) : (
            <Divider mt={2} h="0.5" />
          )}
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          pt={2}
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Text color="white" fontSize="16">
              CHAMADAS
            </Text>
          </Center>
          {selected === 2 ? (
            <Divider mt={2} h="0.5" bgColor={"white"} />
          ) : (
            <Divider mt={2} h="0.5" />
          )}
        </Pressable>
      </HStack>
    </Box>
  );
}

export default function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TabsModel />
    </View>
  );
}
