
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-storage.js";

// NEXORA Firebase Configuration
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

// Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase Services
export {
  app,
  auth,
  db,
  storage
};
