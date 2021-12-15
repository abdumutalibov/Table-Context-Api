import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4RbqHRYqhodE2OmY2t6WKvUoIf1Gxx7A",
  authDomain: "fir-tutorial-2cf7a.firebaseapp.com",
  projectId: "fir-tutorial-2cf7a",
  storageBucket: "fir-tutorial-2cf7a.appspot.com",
  messagingSenderId: "1003968958761",
  appId: "1:1003968958761:web:99939a76601ff738d26738",
  measurementId: "${config.measurementId}"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)