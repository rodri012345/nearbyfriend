import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3YIyAIGmwyRz4fLmZVpQbnYJInQiOD4Y",
  authDomain: "nearbyfriend.firebaseapp.com",
  projectId: "nearbyfriend",
  storageBucket: "nearbyfriend.appspot.com",
  messagingSenderId: "543664631711",
  appId: "1:543664631711:web:cf2588ed5ddfb4c4e657aa",
  measurementId: "G-PNRXJRYRTG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);