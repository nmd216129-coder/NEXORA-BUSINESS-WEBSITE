
/* =========================================
   NEXORA PREMIUM BUSINESS PLATFORM
   FILE: firebase.js

   Firebase App
   Authentication
   Cloud Firestore
   Firebase Storage
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


// =========================================
// 01. FIREBASE CONFIGURATION
// =========================================

// Firebase Console থেকে আপনার Web App-এর
// আসল Configuration এখানে বসাবেন।

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


// =========================================
// 02. INITIALIZE FIREBASE
// =========================================

const app = initializeApp(firebaseConfig);


// =========================================
// 03. FIREBASE AUTHENTICATION
// =========================================

const auth = getAuth(app);


// =========================================
// 04. CLOUD FIRESTORE DATABASE
// =========================================

const db = getFirestore(app);


// =========================================
// 05. FIREBASE STORAGE
// =========================================

const storage = getStorage(app);


// =========================================
// 06. EXPORT FIREBASE SERVICES
// =========================================

export {
  app,
  auth,
  db,
  storage
};
