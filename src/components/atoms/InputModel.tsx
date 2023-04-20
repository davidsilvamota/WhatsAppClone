import { Icon, Input } from "native-base";

type InputModelProps = {
  icon?: React.ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
export default function InputModel(props: InputModelProps) {
  return (
    <Input
      marginY={2}
      p={4}
      InputLeftElement={
        <Icon as={props.icon || <></>} size={6} ml="2" color="muted.400" />
      }
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
