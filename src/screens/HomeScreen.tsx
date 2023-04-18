import React from "react";
import { Text } from "native-base";

import TabsModel from "../components/organisms/TabsModel";

export default function HomeScreen() {
  return (
    <TabsModel
      items={[
        { id: 0, title: "CONVERSAS", content: <Text>CONVERSAS</Text> },
        { id: 1, title: "STATUS", content: <Text>STATUS</Text> },
        { id: 2, title: "CHAMADAS", content: <Text>CHAMADAS</Text> },
      ]}
    />
  );
}
