import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Spacer,
  VStack,
  Text,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { UsersTypes } from "../../services/getCollection";

type CardChatModelProps = {
  data: UsersTypes[];
  onPress: () => void;
  setId?: (id: string) => void;
};

export default function CardChatModel(props: CardChatModelProps) {
  return (
    <Box flex={1}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.onPress();
              props.setId(item.id);
            }}
            style={{ marginVertical: 12 }}
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatar,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
