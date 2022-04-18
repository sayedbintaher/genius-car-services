// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN8A3iq6y86IRxHVGZ24DXB-t5FAaCJp8",
  authDomain: "genius-car-services-713fc.firebaseapp.com",
  projectId: "genius-car-services-713fc",
  storageBucket: "genius-car-services-713fc.appspot.com",
  messagingSenderId: "255538181046",
  appId: "1:255538181046:web:0e0a63bfe64d8455dd8717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;