import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsMJxWA96YNyJ9KFzy0YxDOWl3-kQC3HA",
    authDomain: "crwn-db-d453f.firebaseapp.com",
    databaseURL: "https://crwn-db-d453f.firebaseio.com",
    projectId: "crwn-db-d453f",
    storageBucket: "",
    messagingSenderId: "650905426373",
    appId: "1:650905426373:web:1d88c31142785f44"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

