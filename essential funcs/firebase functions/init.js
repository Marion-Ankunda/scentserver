// Import the functions you need from the SDKs you need
const { getAnalytics } = require("firebase/analytics");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const functions = require('firebase-functions');
let keys = functions.config()?.scent


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: keys?.apikey,
  authDomain: keys?.authdomain,
  projectId: keys?.projectid,
  storageBucket: keys?.storagebucket,
  messagingSenderId: keys?.messagingsenderid,
  appId: keys?.appid,
  measurementId: keys?.measurementid
};

// Initialize Firebase
const appIntialized = initializeApp(firebaseConfig);
module.exports = {appIntialized, firebaseConfig,functions }