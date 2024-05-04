import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage,ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

// const firebaseConfig = {
// apiKey: "AIzaSyD3YIyAIGmwyRz4fLmZVpQbnYJInQiOD4Y",
// authDomain: "nearbyfriend.firebaseapp.com",
// projectId: "nearbyfriend",
// storageBucket: "nearbyfriend.appspot.com",
// messagingSenderId: "543664631711",
// appId: "1:543664631711:web:cf2588ed5ddfb4c4e657aa",
// measurementId: "G-PNRXJRYRTG"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCtHYCYdUN17vIwhPPvLADefPFEbKk9Cg8",
  authDomain: "hospedaje-react-dd174.firebaseapp.com",
  projectId: "hospedaje-react-dd174",
  storageBucket: "hospedaje-react-dd174.appspot.com",
  messagingSenderId: "1066849059054",
  appId: "1:1066849059054:web:7da379cd92ff175e52f3ff"
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