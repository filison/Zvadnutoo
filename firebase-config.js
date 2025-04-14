import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcg0qqzWJwkxmopkTgzfasMqd3siQNxIU",
  authDomain: "zvladnuto-4e6cb.firebaseapp.com",
  projectId: "zvladnuto-4e6cb",
  storageBucket: "zvladnuto-4e6cb.firebasestorage.app", // špatně, // OPRAVA ZDE
  messagingSenderId: "299881468872",
  appId: "1:299881468872:web:8c36e215cf40a91748e6fd",
  measurementId: "G-HZZG7JRYCC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);