import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl0gSpMl9jH32hhnvIFfJMvgu0VX1W1-g",
  authDomain: "whatsappclone-59869.firebaseapp.com",
  projectId: "whatsappclone-59869",
  storageBucket: "whatsappclone-59869.appspot.com",
  messagingSenderId: "570231373054",
  appId: "1:570231373054:web:28f3df79c110d8218b79af",
};

const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
