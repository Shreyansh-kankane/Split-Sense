// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyKTuIYseweFcGudb8aJZpGMQKWopSDdU",
    authDomain: "split-sense.firebaseapp.com",
    projectId: "split-sense",
    storageBucket: "split-sense.appspot.com",
    messagingSenderId: "233110243937",
    appId: "1:233110243937:web:7443ef5ad11eb22681b820",
    measurementId: "G-YJZ6V3RY49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);