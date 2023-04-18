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

type CardChatModelProps = {
  data: {
    id: string;
    fullName: string;
    timeStamp: string;
    recentText: string;
    avatarUrl: string;
  }[];
};

export default function CardChatModel(props: CardChatModelProps) {
  return (
    <Box flex={1}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginVertical: 12 }}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
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
                  {item.fullName}
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
