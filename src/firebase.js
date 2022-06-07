import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCx4i516b8cRVmpDQlLp4UZxv3SBkXK104",
  authDomain: "fir-learn-4d561.firebaseapp.com",
  projectId: "fir-learn-4d561",
  storageBucket: "fir-learn-4d561.appspot.com",
  messagingSenderId: "795479875849",
  appId: "1:795479875849:web:3311a1ad7dd1e3c7e633d8",
  measurementId: "G-1K2XJ17M5B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;