import * as React from "react";
import { NativeBaseProvider } from "native-base";
import UserStack from "./src/routes/UserStack";
import AuthStack from "./src/routes/AuthStack";
import { useAuthentication } from "./src/hooks/useAuthentication";

function App() {
  const { user } = useAuthentication();

  return (
    <NativeBaseProvider>
      {user ? <UserStack /> : <AuthStack />}
    </NativeBaseProvider>
  );
}

export default App;
