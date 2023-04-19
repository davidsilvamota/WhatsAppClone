import { Column, View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

type BadgeMessageModelProps = {
  message: string;
  hour: string;
  type: "send" | "receive" | string;
};

export default function BadgeMessageModel(props: BadgeMessageModelProps) {
  const typePerson = props.type === "send";
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: typePerson ? "flex-end" : "flex-start",
        marginVertical: 12,
      }}
    >
      <Column
        py={1}
        px={2}
        borderRadius={8}
        bg={typePerson ? "#D9FDD3" : "white"}
      >
        <View mr={20}>
          <Text fontSize={16}>{props.message}</Text>
        </View>
        <View alignItems={"flex-end"}>
          <Text fontSize="xs" color="coolGray.500">
            {props.hour}
          </Text>
        </View>
      </Column>
    </TouchableOpacity>
  );
}
