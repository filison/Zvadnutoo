// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcg0qqzWJwkxmopkTgzfasMqd3siQNxIU",
  authDomain: "zvladnuto-4e6cb.firebaseapp.com",
  projectId: "zvladnuto-4e6cb",
  storageBucket: "zvladnuto-4e6cb.firebasestorage.app",
  messagingSenderId: "299881468872",
  appId: "1:299881468872:web:8c36e215cf40a91748e6fd",
  measurementId: "G-HZZG7JRYCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);