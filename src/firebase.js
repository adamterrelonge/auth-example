import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxCEEKXniKVS-i12IBD2ARm4KobkEJwJY",
  authDomain: "nea-example.firebaseapp.com",
  projectId: "nea-example",
  storageBucket: "nea-example.firebasestorage.app",
  messagingSenderId: "1021190866322",
  appId: "1:1021190866322:web:f4d8925c847a16a6a62d4b",
  measurementId: "G-36VMFW0SL5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);