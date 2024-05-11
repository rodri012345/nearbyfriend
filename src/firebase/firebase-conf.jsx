import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage,ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyD3YIyAIGmwyRz4fLmZVpQbnYJInQiOD4Y",
  authDomain: "nearbyfriend.firebaseapp.com",
  databaseURL: "https://nearbyfriend-default-rtdb.firebaseio.com",
  projectId: "nearbyfriend",
  storageBucket: "nearbyfriend.appspot.com",
  messagingSenderId: "543664631711",
  appId: "1:543664631711:web:cf2588ed5ddfb4c4e657aa",
  measurementId: "G-PNRXJRYRTG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export  async function uploadFile(file) {
  const storageRef = ref(storage,v4())
  await uploadBytes (storageRef,file)
  const url = getDownloadURL(storageRef)
  return url
  
}