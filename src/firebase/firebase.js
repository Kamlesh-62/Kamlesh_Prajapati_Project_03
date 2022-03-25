import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAp2t8KbubAsy-YlxyFD-KlgWvnmuKMgDA",
    authDomain: "foodhub-27480.firebaseapp.com",
    projectId: "foodhub-27480",
    storageBucket: "foodhub-27480.appspot.com",
    messagingSenderId: "767007114585",
    appId: "1:767007114585:web:422e2a1486c1eab4663848"
};
// here we start service with application which we have created on firebase.
firebase.initializeApp(firebaseConfig)

// here we connect our app with firestore service
const firebaseApp = firebase.firestore()

export default firebaseApp;

