import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMfdi7uV7GduzJBMbUzCbwPhgavF9THdc",
  authDomain: "sloppybeans-46f07.firebaseapp.com",
  projectId: "sloppybeans-46f07",
  storageBucket: "sloppybeans-46f07.appspot.com",
  messagingSenderId: "541531896988",
  appId: "1:541531896988:web:e9af3441765d4b3c07c159",
  measurementId: "G-4TF47FY47T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);