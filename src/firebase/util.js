import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC-I6NYi2jHgLKh17saSnc4DBwCf2H2Ys",
  authDomain: "crwn-shop-db-4db3a.firebaseapp.com",
  databaseURL: "https://crwn-shop-db-4db3a.firebaseio.com",
  projectId: "crwn-shop-db-4db3a",
  storageBucket: "crwn-shop-db-4db3a.appspot.com",
  messagingSenderId: "778660509631",
  appId: "1:778660509631:web:f243da94ab7a8d5009930a",
  measurementId: "G-K5HCQGYQDL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
