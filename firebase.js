const config = {
    apiKey: "AIzaSyAEpK-QycuWRN2QAVX9OxYtoQh5aOYzD7I",
    authDomain: "sigmahacks-f60d1.firebaseapp.com",
    databaseURL: "https://sigmahacks-f60d1.firebaseio.com",
    projectId: "sigmahacks-f60d1",
    storageBucket: "sigmahacks-f60d1.appspot.com",
    messagingSenderId: "192614888023",
    appId: "1:192614888023:web:11e0706d66cd5e3786a912",
    measurementId: "G-7FB9PE0NZQ"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }

  export default firebase
  export const firebaseAuth = firebase.auth