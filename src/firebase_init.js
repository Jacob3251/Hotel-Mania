// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAkMGIjs4A1iHx9_Ek2GUSAv1xOlMXJtQ",
  authDomain: "hotel-heaven-88ae2.firebaseapp.com",
  projectId: "hotel-heaven-88ae2",
  storageBucket: "hotel-heaven-88ae2.appspot.com",
  messagingSenderId: "442078120451",
  appId: "1:442078120451:web:794bdafe9acde0cb8c9c36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
