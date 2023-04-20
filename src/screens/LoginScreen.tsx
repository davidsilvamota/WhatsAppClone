import React, { useState } from "react";
import { Button, Icon, Input, Pressable, Stack, Text } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { colors } from "../utils/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import InputModel from "../components/atoms/InputModel";
import InputPasswordModel from "../components/atoms/InputPasswordModel";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SiginIn() {
    if (email === "Admin" && password === "admin123") {
      navigation.navigate("WhatsApp");
    } else {
      setEmail("");
      setPassword("");
      alert("Digite um email e senha validos para efetuar login");
    }
  }

  return (
    <ScreenModel>
      <InputModel
        value={email}
        onChangeText={(e: any) => {
          setEmail(e);
        }}
        placeholder="Digite seu email"
        icon={<MaterialIcons name="person" />}
      />
      <InputPasswordModel
        onChangeText={(e: any) => {
          setPassword(e);
        }}
        value={password}
        placeholder="Digite sua senha"
      />
      <Button my={2} onPress={() => SiginIn()} bg={colors.primary}>
        Login
      </Button>
    </ScreenModel>
  );
}
