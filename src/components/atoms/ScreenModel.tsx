import { View } from "native-base";

export default function ScreenModel(props: { children: React.ReactNode }) {
  return (
    <View p={4} flex={1}>
      {props.children}
    </View>
  );
}
