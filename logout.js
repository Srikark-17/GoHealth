import firebase from './firebase.js';
//var link = document.getElementById('signUp');
window.addEventListener('load', logout);

function logout(){
    console.log("Sign Out")
    firebase.auth().signOut().then(function() {
        alert("Logged Out Succesfully")
        window.location.href = "index.html"
      }).catch(function(error) {
        // An error happened.
        alert("Error Occured")
      });
}
