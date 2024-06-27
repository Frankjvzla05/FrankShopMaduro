import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJdGV0eK2--8orhoOvP9feJcP4hv8AYFg",
  authDomain: "frank-s-shop.firebaseapp.com",
  projectId: "frank-s-shop",
  storageBucket: "frank-s-shop.appspot.com",
  messagingSenderId: "973665844022",
  appId: "1:973665844022:web:7776af24e51cf8255a5197"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);