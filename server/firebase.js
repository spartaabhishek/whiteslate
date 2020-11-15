const { Firestore } = require("@google-cloud/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCFz4QAixMGSAJJLp5yyg-cm70i0g6RkoI",
  authDomain: "defhacks-cde3b.firebaseapp.com",
  databaseURL: "https://defhacks-cde3b.firebaseio.com",
  projectId: "defhacks-cde3b",
  storageBucket: "defhacks-cde3b.appspot.com",
  messagingSenderId: "771443344507",
  appId: "1:771443344507:web:a642a680a0b488c963cede",
  measurementId: "G-77MKSKKFES",
};

const firestore = new Firestore(firebaseConfig);

module.exports = firestore;
