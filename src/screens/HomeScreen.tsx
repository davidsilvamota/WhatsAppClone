import React, { useState } from "react";
import { Text } from "native-base";
import TabsModel from "../components/organisms/TabsModel";
import CardChatModel from "../components/atoms/CardChatModel";

import { getCollection } from "../services/getCollection";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function HomeScreen({ navigation }) {
  const [usersData, setUsersData] = useState([]);
  const [id, setId] = useState("");

  // async function getUserChat(collection: string, id: string) {
  //   const docRef = doc(db, collection, id);
  //   const docSnap = await getDoc(docRef);
  //   console.log(docSnap.data());
  // }

  React.useEffect(() => {
    getCollection("users", setUsersData);
    console.log(usersData.map((e) => e.name));
  }, []);

  return (
    <>
      <TabsModel
        items={[
          {
            id: 0,
            title: "CONVERSAS",
            content: (
              <CardChatModel
                setId={setId}
                onPress={() => {
                  navigation.navigate("Chat");
                  console.log(id);
                }}
                data={usersData}
              />
            ),
          },
          { id: 1, title: "STATUS", content: <Text>STATUS</Text> },
          { id: 2, title: "CHAMADAS", content: <Text>CHAMADAS</Text> },
        ]}
      />
    </>
  );
}
