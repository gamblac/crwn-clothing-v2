import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEg7_U1pFQWyPlj7xM9FUHDrg0NRF8Ltw",
    authDomain: "crwn-db-f2d07.firebaseapp.com",
    projectId: "crwn-db-f2d07",
    storageBucket: "crwn-db-f2d07.appspot.com",
    messagingSenderId: "987314108245",
    appId: "1:987314108245:web:c131d8f5cc2271e8f621dc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    // how to check if our userDocRef existis in firestore:
    console.log(userSnapshot.exists());

    // if user data does not exists
    // create / set the document with the data from userauth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {
               displayName,
               email,
               createdAt 
            });
        } catch (error) {
            console.log("error creating the user: ", error.message);
        }
    }
    return userDocRef;
  }