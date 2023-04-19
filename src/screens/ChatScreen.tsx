import React from "react";
import { Text, View, Pressable, Column, Row, Input, Icon } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { TouchableOpacity } from "react-native";
import IconModel from "../components/atoms/IconModel";

export default function ChatScreen() {
  return (
    <ScreenModel>
      <BadgeMessageModel message="Olá Tudo bem ?" hour="2:45" type="send" />
      <BadgeMessageModel
        message="Tudo e com Você ?"
        hour="2:45"
        type="receive"
      />
      <SendMessageModel />
    </ScreenModel>
  );
}
type BadgeMessageModelProps = {
  message: string;
  hour: string;
  type: "send" | "receive";
};
function SendMessageModel() {
  return (
    <Input
      p={4}
      backgroundColor={"white"}
      borderColor={"white"}
      borderRadius={12}
      InputLeftElement={
        <IconModel size={6} ml={2} icon={require("../utils/icons/emoji.png")} />
      }
      InputRightElement={
        <>
          <IconModel
            size={6}
            mr={2}
            icon={require("../utils/icons/attach.png")}
          />
          <IconModel
            size={6}
            mr={2}
            icon={require("../utils/icons/camera.png")}
          />
        </>
      }
      placeholder=""
    />
  );
}

function BadgeMessageModel(props: BadgeMessageModelProps) {
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
