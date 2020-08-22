import firebase from './firebase.js';
var link = document.getElementById('login');
link.addEventListener('click', log);
// function def(){
//     if(document.getElementById("d1").value=="admin" && document.getElementById('d2').value=="admin"){
//         window.location.href = "doctor.html";
//     }
//     else{
//         alert("Incorrect username/password");
//     }
// }



// function def1(){
//     if(document.getElementById("p1").value=="john" && document.getElementById('p2').value=="john1"){
//         window.location.href = "p1.html";
//     }
//     else if(document.getElementById("p1").value=="karen" && document.getElementById('p2').value=="karen1"){
//         window.location.href = "p2.html";
//     }
//     if(document.getElementById("p1").value=="tej" && document.getElementById('p2').value=="tej1"){
//         window.location.href = "p3.html";
//     }
//     else{
//         alert("Incorrect username/password");
//     }
// }

function log(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          alert("You are already logged in!")
          window.location.href = "index.html"
          // ...
        } else {
          // User is signed out.
          // ...
          var email = document.getElementById("email").value
            var password = document.getElementById("password").value
            console.log(email)
            console.log(password)
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Success")

                if (errorCode !=null || errorMessage != null){
                    alert("Error " + errorCode + " Error Message " + errorMessage)
                }
                window.location.href = "patient-info.html"
                // ...
            });
          
        }
      });
}