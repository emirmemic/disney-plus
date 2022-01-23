import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

export{db}
