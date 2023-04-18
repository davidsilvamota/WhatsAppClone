import {
  Box,
  Center,
  Divider,
  HStack,
  Pressable,
  View,
  Text,
} from "native-base";

import { colors } from "../../utils/colors/colors";
import React from "react";

type itemsProps = {
  items: { id: number; title: string; content?: React.ReactNode }[];
};
export default function TabsModel(props: itemsProps) {
  const [selected, setSelected] = React.useState(1);

  return (
    <>
      <HStack bg={colors.primary} shadow={6}>
        {props.items.map((e, i) => (
          <>
            <Pressable
              key={i}
              pt={2}
              alignItems="center"
              opacity={selected === e.id ? 1 : 0.5}
              flex={1}
              onPress={() => setSelected(e.id)}
            >
              <Center>
                <Text fontWeight={"semibold"} color="white" fontSize="16">
                  {e.title}
                </Text>
              </Center>
              {selected === e.id ? (
                <Divider mt={2} h="0.5" bgColor={"white"} />
              ) : (
                <Divider mt={2} h="0.5" />
              )}
            </Pressable>
          </>
        ))}
      </HStack>
      {props.items.map((e, i) =>
        selected === e.id ? (
          <View key={i} p={4} flex={1} width={"100%"}>
            {e.content}
          </View>
        ) : (
          <></>
        )
      )}
    </>
  );
}
