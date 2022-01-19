// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqvjodNaQQKUavkClq2PoIeHnv0zIen7w",
    authDomain: "foodrecipe-project-03.firebaseapp.com",
    projectId: "foodrecipe-project-03",
    storageBucket: "foodrecipe-project-03.appspot.com",
    messagingSenderId: "121600911747",
    appId: "1:121600911747:web:71683d15f011606a3baeb6"
};

// Initialize Firebase
const firebaseProject = initializeApp(firebaseConfig);

export default firebaseProject;

