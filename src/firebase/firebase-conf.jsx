import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2IjCjaIpsCYaW08cYwdxmM7KM-qfgdWM",
  authDomain: "respaldonearbyfriends.firebaseapp.com",
  projectId: "respaldonearbyfriends",
  storageBucket: "respaldonearbyfriends.appspot.com",
  messagingSenderId: "418590972776",
  appId: "1:418590972776:web:0f4daf5a47c328573ad4dd"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);