import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbniH3qmCMSRhHSR9oyLkhP3OuSx-7XYw",
    authDomain: "crwn-db-2f04a.firebaseapp.com",
    projectId: "crwn-db-2f04a",
    storageBucket: "crwn-db-2f04a.appspot.com",
    messagingSenderId: "673193926588",
    appId: "1:673193926588:web:faa225d3579df1ddfe55b9",
    measurementId: "G-R0NQQDBHBZ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  const facebook_provider = new firebase.auth.FacebookAuthProvider();
  export const signInWithFacebook = () => auth.signInWithPopup(facebook_provider);

  export default firebase;