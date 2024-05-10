import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage,ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

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
export const storage = getStorage(app);
export  async function uploadFile(file) {
  const storageRef = ref(storage,v4())
  await uploadBytes (storageRef,file)
  const url = getDownloadURL(storageRef)
  return url
  
}