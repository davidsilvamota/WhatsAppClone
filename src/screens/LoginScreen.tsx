import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import ScreenModel from "../components/atoms/ScreenModel";
import { colors } from "../utils/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import InputModel from "../components/atoms/InputModel";
import InputPasswordModel from "../components/atoms/InputPasswordModel";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const docRef = doc(db, "users", "naruto");
  const docSnap = getDoc(docRef);

  async function signIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Por favor digite um email e senha válido");
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
      <Button my={2} onPress={() => signIn()} bg={colors.primary}>
        Login
      </Button>
    </ScreenModel>
  );
}
