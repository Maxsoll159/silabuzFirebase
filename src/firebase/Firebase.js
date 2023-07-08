// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANdnedOj_j8t34HpxvDz_Z6J7SIKj7MYo",
  authDomain: "proyectosila.firebaseapp.com",
  projectId: "proyectosila",
  storageBucket: "proyectosila.appspot.com",
  messagingSenderId: "1069618813032",
  appId: "1:1069618813032:web:586363f15718bc92eb03dd",
  measurementId: "G-MPWH3QBHR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);