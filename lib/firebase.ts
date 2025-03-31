import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkEP1AkJn20PJ4oym8mTBQHXFF5ny1fCs",
  authDomain: "dashboard-5d748.firebaseapp.com",
  projectId: "dashboard-5d748",
  storageBucket: "dashboard-5d748.firebasestorage.app",
  messagingSenderId: "1071963579613",
  appId: "1:1071963579613:web:0cc50c18906627e2556734",
  measurementId: "G-KNRJTK0VV2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);