// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc, 
  query, 
  orderBy, 
  where,
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  updatePassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC__g5enQfCykCIZZqS4aUyklUhii8F0Uo",
  authDomain: "prayvault-e7845.firebaseapp.com",
  projectId: "prayvault-e7845",
  storageBucket: "prayvault-e7845.firebasestorage.app",
  messagingSenderId: "314816509199",
  appId: "1:314816509199:web:47ff5649ea122c1dd93a7a",
  measurementId: "G-FD19ZR34MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firestore and Authentication helpers
export { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc, 
  query, 
  orderBy, 
  where,
  onSnapshot,
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  firebaseConfig
};