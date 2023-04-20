import * as React from "react";
import { Icon, Image } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { TouchableOpacity } from "react-native";

type IconModelProps = {
  size?: number;
  tintColor?: ColorType;
  icon: React.ReactNode;
  onPress?: () => void;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  m?: number;
  notTouch?: boolean;
};
export default function IconModel(props: IconModelProps) {
  return (
    <TouchableOpacity
      disabled={props.notTouch || false}
      onPress={props.onPress}
    >
      <Icon
        ml={props.ml}
        mr={props.mr}
        mb={props.mb}
        mt={props.mt}
        as={props.icon}
        size={props.size || 6}
        color={props.tintColor || "gray.400"}
      />
    </TouchableOpacity>
  );
}
