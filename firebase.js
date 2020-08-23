const config = {
  apiKey: "AIzaSyCUDrErgQSWUsIrEGTpwcLHAxRVo1GEpQw",
  authDomain: "gohealth-287305.firebaseapp.com",
  databaseURL: "https://gohealth-287305.firebaseio.com",
  projectId: "gohealth-287305",
  storageBucket: "gohealth-287305.appspot.com",
  messagingSenderId: "193336133177",
  appId: "1:193336133177:web:975c8c52c05ab32c2eefe8",
  measurementId: "G-MN17SZD07V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
export const firebaseAuth = firebase.auth;
