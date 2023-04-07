import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjunf9qyo_muBtfJZa1H6fWc6SrGissmw",
  authDomain: "market-n-marketer.firebaseapp.com",
  projectId: "market-n-marketer",
  storageBucket: "market-n-marketer.appspot.com",
  messagingSenderId: "96929437164",
  appId: "1:96929437164:web:ff3ab5d1458ea0b601dcc9",
  measurementId: "G-W4BM47XZXV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;