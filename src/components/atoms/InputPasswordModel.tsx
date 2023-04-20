import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable } from "native-base";
import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
type InputpasswordModelProps = {
  icon?: React.ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
export default function InputPasswordModel(props: InputpasswordModelProps) {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Input
        marginY={2}
        p={4}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={6}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Digite sua senha"
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </>
  );
}
