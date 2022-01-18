import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAucrghF7TlNE1-E1Kriw08O5o77WDz5EM",
  authDomain: "disney-plus-d4b1f.firebaseapp.com",
  projectId: "disney-plus-d4b1f",
  storageBucket: "disney-plus-d4b1f.appspot.com",
  messagingSenderId: "692985179953",
  appId: "1:692985179953:web:719c05a2525734a130ca10"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export{db}
