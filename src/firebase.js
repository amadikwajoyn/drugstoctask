import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrmW9OA2wokTxT5oRBfvjLhAFrjoAGQko",
  authDomain: "drugstoc-e60c3.firebaseapp.com",
  projectId: "drugstoc-e60c3",
  storageBucket: "drugstoc-e60c3.appspot.com",
  messagingSenderId: "437406948831",
  appId: "1:437406948831:web:eb91a8ed90314e7f21b86a",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const firebase = {
  app,
  database,
};

export default firebase;
