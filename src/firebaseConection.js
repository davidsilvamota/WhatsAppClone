// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK17WhrEGUEC5dZ9WTJ6ZUD4A9Ut_T4vU",
  authDomain: "whatsappclone-f7e4f.firebaseapp.com",
  projectId: "whatsappclone-f7e4f",
  storageBucket: "whatsappclone-f7e4f.appspot.com",
  messagingSenderId: "699109104662",
  appId: "1:699109104662:web:dac566849d3e6efaa96937",
};

// Initialize Firebase
if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
