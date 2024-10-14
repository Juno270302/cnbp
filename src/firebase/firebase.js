// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2TLDA1QD4Rpd4Sf_ZiEOF6Jww_pKVXk",
  authDomain: "bphuoc-8a14d.firebaseapp.com",
  projectId: "bphuoc-8a14d",
  storageBucket: "bphuoc-8a14d.appspot.com",
  messagingSenderId: "603245584576",
  appId: "1:603245584576:web:601c65d94356a3f1730d25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
