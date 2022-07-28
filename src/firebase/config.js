// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbcozmgDYVH9ETKW6iZeArRhOtBclEWBg",
  authDomain: "react-redux-curso-a87c0.firebaseapp.com",
  projectId: "react-redux-curso-a87c0",
  storageBucket: "react-redux-curso-a87c0.appspot.com",
  messagingSenderId: "511913613695",
  appId: "1:511913613695:web:86ea862178650134bf224a",
};

// Initialize Firebase
//estos son los objetos que necesitare para interactuar con firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); //aqui vienen todas las funcionalidades de autenticacion
export const FirebaseDB = getFirestore(FirebaseApp);
