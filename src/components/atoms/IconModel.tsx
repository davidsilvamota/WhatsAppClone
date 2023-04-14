import * as React from "react";
import { Image } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { ImageSourcePropType, TouchableOpacity } from "react-native";

type IconModelProps = {
  size?: number;
  tintColor?: ColorType;
  icon?: ImageSourcePropType;
  onPress?: () => void;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  m?: number;
};
export default function IconModel(props: IconModelProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        ml={props.ml}
        mr={props.mr}
        mb={props.mb}
        mt={props.mt}
        m={props.m}
        w={props.size || 4}
        h={props.size || 4}
        tintColor={props.tintColor || "black"}
        source={props.icon}
        alt="Alternate Text"
      />
    </TouchableOpacity>
  );
}
