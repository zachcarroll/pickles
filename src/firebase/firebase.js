import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8rnr1sy2ang3dS1pMyyG9sYjimHCbxWo",
  authDomain: "pickles-34b9c.firebaseapp.com",
  databaseURL: "https://pickles-34b9c.firebaseio.com",
  projectId: "pickles-34b9c",
  storageBucket: "pickles-34b9c.appspot.com",
  messagingSenderId: "599958850370"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};
