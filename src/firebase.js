import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcxkcS8rl3J9TvT0gwrfMvZABvbA4TSGU",
  authDomain: "netflix-clone-728f7.firebaseapp.com",
  projectId: "netflix-clone-728f7",
  storageBucket: "netflix-clone-728f7.appspot.com",
  messagingSenderId: "698093419678",
  appId: "1:698093419678:web:6d93d2b8959807b1f0cf8f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// keep track of what user subscription is
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
