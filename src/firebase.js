import firebase from "firebase/compat/app"
import {getFirestore} from "firebase/firestore"
import "firebase/compat/auth"

const app=firebase.initializeApp({
  apiKey: "AIzaSyA498K0XOJa9JSrS_uT4IrZ1IYWRIQv3MQ",
  authDomain: "final-year-6fad4.firebaseapp.com",
  projectId: "final-year-6fad4",
  storageBucket: "final-year-6fad4.appspot.com",
  messagingSenderId:"695811309384",
  appId: "1:695811309384:web:79b84f9f10527a765d3d7d"
})

export const auth=app.auth();
export const db=getFirestore(app);
export default app;