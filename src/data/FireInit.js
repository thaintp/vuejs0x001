import firebase from "firebase";
import "firebase/firestore";
import FireConfig from "./FireConfig";

const FireApp = firebase.initializeApp(FireConfig);

export default FireApp.firestore();
