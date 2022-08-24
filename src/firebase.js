import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZ9SYOjzPfLa980rgxTHkd2rPvebBqPh4",
    authDomain: "disneyplus-a36c8.firebaseapp.com",
    projectId: "disneyplus-a36c8",
    storageBucket: "disneyplus-a36c8.appspot.com",
    messagingSenderId: "52127965619",
    appId: "1:52127965619:web:9879246c08722fc34f2bc6",
    measurementId: "G-KLHGSH4RDT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;