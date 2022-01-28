import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2KWcG18-9lmseG4oHAdLFgzvEazVSZMc',
  authDomain: 'crwn-db-b260d.firebaseapp.com',
  projectId: 'crwn-db-b260d',
  storageBucket: 'crwn-db-b260d.appspot.com',
  messagingSenderId: '561928084730',
  appId: '1:561928084730:web:aa4652772e776c2e077d43',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
