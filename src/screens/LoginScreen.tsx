import React from "react";
import { Button, Text } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { colors } from "../utils/colors/colors";

export default function LoginScreen() {
  return (
    <ScreenModel>
      <Text>Login</Text>
      <Button onPress={() => console.log("ok")} bg={colors.primary}>
        Entrar com o Google
      </Button>
    </ScreenModel>
  );
}
