import React, { useState } from "react";
import { Text, View, Column } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { TouchableOpacity } from "react-native";
import IconModel from "../components/atoms/IconModel";
import { colors } from "../utils/colors/colors";
import SendMessageModel from "../components/molecules/SendMessageModel";
import BadgeMessageModel from "../components/atoms/BadgeMessageModel";

export default function ChatScreen() {
  const [messageData, setMessageData] = useState([
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
      <View flex={1}>
        {messageData.map((e, i) => (
          <BadgeMessageModel
            key={i}
            message={e.message}
            hour={e.hour}
            type={e.type}
          />
        ))}
      </View>
      <SendMessageModel
        onPress={() => sendMessage()}
        value={message}
        onChangeText={(e: string) => setMessage(e)}
      />
    </ScreenModel>
  );
}
