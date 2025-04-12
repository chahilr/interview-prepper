// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTId3O9MH2z_0PAKWVE6CnM_mp-yBdywg',
  authDomain: 'ai-interview-prepper.firebaseapp.com',
  projectId: 'ai-interview-prepper',
  storageBucket: 'ai-interview-prepper.firebasestorage.app',
  messagingSenderId: '40215965833',
  appId: '1:40215965833:web:8b913dc17aad25c25c1658',
  measurementId: 'G-RX9PCDYE6F',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
