import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDhNkv0zDgiEl0H3w8r_Uia_Myx8hXMXm8",
  authDomain: "rayahotelbackend.firebaseapp.com",
  projectId: "rayahotelbackend",
  storageBucket: "rayahotelbackend.appspot.com",
  messagingSenderId: "989718431245",
  appId: "1:989718431245:web:5380d8ff47f9a15c06b744",
  measurementId: "G-9JBNQZGVQ1"


};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
