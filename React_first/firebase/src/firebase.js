import firebase from 'firebase/app'
import

const firebaseConfig = {
    apiKey: "AIzaSyDyOQDr0kXCbHDXPdpVY4mAueOAMHcUHB0",
    authDomain: "fir-lesson-75c0a.firebaseapp.com",
    projectId: "fir-lesson-75c0a",
    storageBucket: "fir-lesson-75c0a.appspot.com",
    messagingSenderId: "766420839863",
    appId: "1:766420839863:web:8a92d6d0d51fdd8001cc32",
    measurementId: "G-VDMS3BWGHR"
  };

  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()
  export {firebase}