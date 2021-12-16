import firebase from "firebase";

var firebaseConfig = {
	
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();
const authentication = firebase.auth();

db.enablePersistence();

export { db, authentication };
