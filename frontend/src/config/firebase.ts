// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Y_0pnKECw4zmEvvu6enxArZiWX0yzSs",
  authDomain: "progress-tracker-417117.firebaseapp.com",
  projectId: "progress-tracker-417117",
  storageBucket: "progress-tracker-417117.appspot.com",
  messagingSenderId: "929635734882",
  appId: "1:929635734882:web:71d6ce7ab3cad87f37083b",
  measurementId: "G-X76E91W5C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
