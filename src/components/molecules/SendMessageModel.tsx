import { Avatar, Input, View } from "native-base";
import IconModel from "../atoms/IconModel";
import { TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors/colors";

export default function SendMessageModel(props: {
  value?: string;
  onChangeText?: (text: string) => void;
  onPress: () => void;
}) {
  return (
    <View flexDirection={"row"}>
      <Input
        value={props.value}
        onChangeText={props.onChangeText}
        w={"85%"}
        p={4}
        mr={2}
        backgroundColor={"white"}
        borderColor={"white"}
        borderRadius={12}
        InputLeftElement={
          <IconModel
            size={6}
            ml={2}
            icon={require("../../utils/icons/emoji.png")}
          />
        }
        InputRightElement={
          <>
            <IconModel
              size={6}
              mr={2}
              icon={require("../../utils/icons/attach.png")}
            />
            <IconModel
              size={6}
              mr={2}
              icon={require("../../utils/icons/camera.png")}
            />
          </>
        }
        placeholder=""
      />
      <TouchableOpacity onPress={props.onPress}>
        <Avatar bg={colors.primary}>
          <IconModel
            notTouch
            tintColor={"white"}
            size={6}
            icon={require("../../utils/icons/send.png")}
          />
        </Avatar>
      </TouchableOpacity>
    </View>
  );
}
