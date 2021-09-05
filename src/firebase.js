// * Importing in Firebase v9
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPAwQSLoQQJj7ml3XEQeZTJ1cneIFEFbc",
  authDomain: "netflix-reactclone-1.firebaseapp.com",
  projectId: "netflix-reactclone-1",
  storageBucket: "netflix-reactclone-1.appspot.com",
  messagingSenderId: "559633220830",
  appId: "1:559633220830:web:3af9152bd1a62f4fce6e4f",
};

// Firebase V9 way of doing
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

//Creating an instance of GoogleAuthProvider for signing user with Google account
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
