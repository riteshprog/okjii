import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDoCvtAAF3NAszCwXeAQ1Tes__zLxx02Wc",
  authDomain: "userinfo-266619.firebaseapp.com",
  databaseURL: "https://userinfo-266619.firebaseio.com",
  projectId: "userinfo-266619",
  storageBucket: "userinfo-266619.appspot.com",
  messagingSenderId: "323393848831",
  appId: "1:323393848831:web:de08ce1e46dc71c620d3ca",
  measurementId: "G-709S1BW4ZY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();