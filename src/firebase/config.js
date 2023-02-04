// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3OYteAq5MGcieF_TMX6Pxn9Ub59WUums",
  authDomain: "react-bcfa6.firebaseapp.com",
  projectId: "react-bcfa6",
  storageBucket: "react-bcfa6.appspot.com",
  messagingSenderId: "454487415662",
  appId: "1:454487415662:web:01796e7339651a69357f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);