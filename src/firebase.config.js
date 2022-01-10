// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAJqS1xmU8iYjwsLHbRYe0nmBDtLAItxI",
  authDomain: "myunibarber-22b56.firebaseapp.com",
  projectId: "myunibarber-22b56",
  storageBucket: "myunibarber-22b56.appspot.com",
  messagingSenderId: "450526100684",
  appId: "1:450526100684:web:076f75be2ba3c85b365669",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
