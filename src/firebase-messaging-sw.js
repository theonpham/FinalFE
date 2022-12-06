  // Import the functions you need from the SDKs you need
  importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCZXjBx8PrxZp603h3LA7f5vRfbp6B6Iko",
    authDomain: "restaurant-order-d1125.firebaseapp.com",
    projectId: "restaurant-order-d1125",
    storageBucket: "restaurant-order-d1125.appspot.com",
    messagingSenderId: "941187178023",
    appId: "1:941187178023:web:d0a8970f502c052e437802",
    measurementId: "G-0VXFNKBJYF"
});

const messaging = firebase.messaging();