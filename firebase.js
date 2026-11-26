
/* =========================================
   NEXORA BUSINESS WEBSITE
   FIREBASE CONFIGURATION
========================================= */

// Firebase SDK Imports

import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";


// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyAjYGwVfgEAe-wYGwAsa3wwN3_V09FDRXk",
  authDomain: "nexora-fb9ed.firebaseapp.com",
  projectId: "nexora-fb9ed",
  storageBucket: "nexora-fb9ed.firebasestorage.app",
  messagingSenderId: "1082698782543",
  appId: "1:1082698782543:web:9ea8ac7e30647b3f25173a",
  measurementId: "G-Q44VLSD8MT"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Firebase Authentication

const auth = getAuth(app);


// Cloud Firestore

const db = getFirestore(app);


// Firebase Storage

const storage = getStorage(app);


// Export Services

export {
  app,
  auth,
  db,
  storage
};
