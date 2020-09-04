import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAN2h0tjWP1_rEzHsnvqFdw-SKoUzjcM8Q",
  authDomain: "whatsapp-clone-667e2.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-667e2.firebaseio.com",
  projectId: "whatsapp-clone-667e2",
  storageBucket: "whatsapp-clone-667e2.appspot.com",
  messagingSenderId: "116320430844",
  appId: "1:116320430844:web:d99a6ed8b38347a8ea8579",
  measurementId: "G-REG2QLZK8T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
