import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCSYCVxqHp-6-EjUOCAa2C1P2VWdefWy3s",
  authDomain: "q-98d54.firebaseapp.com",
  projectId: "q-98d54",
  storageBucket: "q-98d54.appspot.com",
  messagingSenderId: "436392409732",
  appId: "1:436392409732:web:c3ebdef772cfa1872420d1"
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };