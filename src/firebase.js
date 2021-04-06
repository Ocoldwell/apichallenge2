import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {firebaseConfig} from "./config"

firebase.initializeApp(firebaseConfig)

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.auth()
