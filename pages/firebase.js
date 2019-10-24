import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBPwgMQPureZBuhw5uaooYyQNKqSy6mUK0",
    authDomain: "fir-assignment-a91de.firebaseapp.com",
    databaseURL: "https://fir-assignment-a91de.firebaseio.com",
    projectId: "fir-assignment-a91de",
    storageBucket: "fir-assignment-a91de.appspot.com",
    messagingSenderId: "263839597693",
    appId: "1:263839597693:web:41ed3a39d34ec126819d14",
    measurementId: "G-XZR55N3GFJ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;