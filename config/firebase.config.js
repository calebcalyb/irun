// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDiX-WUL8DDiXfnuzYpDAIAx17H5zM7YA8",
  // authDomain: "irun-ecaa1.firebaseapp.com",
  // projectId: "irun-ecaa1",
  // storageBucket: "irun-ecaa1.appspot.com",
  // messagingSenderId: "1064168985726",
  // appId: "1:1064168985726:web:00bc31953ad896a979b42f"

  // Your web app's Firebase configuration
  apiKey: "AIzaSyDlsrrTU6vwIfPjrSXioC86Iq7EKCpihxA",
  authDomain: "irun-77aab.firebaseapp.com",
  projectId: "irun-77aab",
  storageBucket: "irun-77aab.appspot.com",
  messagingSenderId: "567104072370",
  appId: "1:567104072370:web:204e6d72675bdebd33b7ab"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestoreDB = getFirestore(app);
const storage = getStorage(app);

export { firestoreDB,storage }
