// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Tru84x4tfTjHJUiRJQEzGxwaw4mOH0c",
  authDomain: "anime-blog-1e3a5.firebaseapp.com",
  projectId: "anime-blog-1e3a5",
  storageBucket: "anime-blog-1e3a5.firebasestorage.app",
  messagingSenderId: "561806921005",
  appId: "1:561806921005:web:bc30f633d13f7e724ed7a4",
  measurementId: "G-DQBRTPGVQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


