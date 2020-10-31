import firebase from 'firebase/app'
import 'firebase/firestore'
/*
var firebaseConfig = {
  apiKey: "AIzaSyDA4eKL8k_gWVznvolZs0KBfVrCDcPzduI",
  authDomain: "crudreactfirebase-46c03.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-46c03.firebaseio.com",
  projectId: "crudreactfirebase-46c03",
  storageBucket: "crudreactfirebase-46c03.appspot.com",
  messagingSenderId: "29331121861",
  appId: "1:29331121861:web:545785c109c03113cbb2ac",
  measurementId: "G-JKWV3M2CXB"
};*/
var firebaseConfig = {
  apiKey: "AIzaSyBXgfz2-e-I1Z0dxw2nucucWLnyhK8MEb8",
  authDomain: "crudreactfirebase-79cd6.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-79cd6.firebaseio.com",
  projectId: "crudreactfirebase-79cd6",
  storageBucket: "crudreactfirebase-79cd6.appspot.com",
  messagingSenderId: "532773869376",
  appId: "1:532773869376:web:e521f15ca1ae859fd48ca5"
};
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();