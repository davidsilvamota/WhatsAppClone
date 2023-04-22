import React, { useState } from "react";

import ScreenModel from "../components/atoms/ScreenModel";
import SendMessageModel from "../components/molecules/SendMessageModel";
import BadgeMessageModel from "../components/atoms/BadgeMessageModel";
import { Flex, KeyboardAvoidingView, View } from "native-base";
import { Platform, ScrollView } from "react-native";

export default function ChatScreen() {
  const [messageData, setMessageData] = useState([
    { message: "Olá tube bem ?", hour: "2:45", type: "send" },
    { message: "Tudo e com Você ?", hour: "2:45", type: "receive" },
    { message: "Olá tube bem ?", hour: "2:45", type: "send" },
    { message: "Tudo e com Você ?", hour: "2:45", type: "receive" },
    { message: "Olá tube bem ?", hour: "2:45", type: "send" },
    { message: "Tudo e com Você ?", hour: "2:45", type: "receive" },
    { message: "Olá tube bem ?", hour: "2:45", type: "send" },
    { message: "Tudo e com Você ?", hour: "2:45", type: "receive" },
    { message: "Olá tube bem ?", hour: "2:45", type: "send" },
    { message: "Tudo e com Você ?", hour: "2:45", type: "receive" },
  ]);
  const [message, setMessage] = useState("");
  function sendMessage() {
    setMessageData([
      ...messageData,
      { message: message, hour: "1:35", type: "send" },
    ]);
    setMessage("");
  }

  return (
    <ScreenModel>
      <ScrollView>
        {messageData.map((e, i) => (
          <BadgeMessageModel message={e.message} hour={e.hour} type={e.type} />
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        h={{
          base: "50px",
          lg: "0",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SendMessageModel
          onPress={() => sendMessage()}
          value={message}
          onChangeText={(e) => setMessage(e)}
        />
      </KeyboardAvoidingView>
    </ScreenModel>
  );
}
