import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-full-stack.firebaseapp.com",
  projectId: "interview-full-stack",
  storageBucket: "interview-full-stack.firebasestorage.app",
  messagingSenderId: "582416466791",
  appId: "1:582416466791:web:64bb2f51af2858b1fde5c2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
