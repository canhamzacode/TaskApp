// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHqNrzfV83RhLHdC28fU3fE3d3WylG1VA",
    authDomain: "pedro-c5755.firebaseapp.com",
    projectId: "pedro-c5755",
    storageBucket: "pedro-c5755.appspot.com",
    messagingSenderId: "1050970275822",
    appId: "1:1050970275822:web:8e365a14a5f4d3250ad8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)