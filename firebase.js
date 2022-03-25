// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDsItYPR8hG8XcdiW4-NohaaNCXxVl22es",
   authDomain: "fir-auth-90d10.firebaseapp.com",
   projectId: "fir-auth-90d10",
   storageBucket: "fir-auth-90d10.appspot.com",
   messagingSenderId: "1023001902252",
   appId: "1:1023001902252:web:36d77d8a8e9254227bf309"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export const db = getFirestore(app); 
export const totalBooks = firebase.firestore();

export { auth };