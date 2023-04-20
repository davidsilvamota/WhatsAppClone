import React, { useState } from "react";
import { Button, Text } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { colors } from "../utils/colors/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ScreenModel>
      <Button onPress={() => console.log("logou")} bg={colors.primary}>
        Entrar com o Google
      </Button>
    </ScreenModel>
  );
}
