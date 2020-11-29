  var firebaseConfig = {
    apiKey: "AIzaSyC_v2S7qGvmGZN7tkRA1ONzZf7xrSwCzt8",
    authDomain: "thegreatwave-d66fa.firebaseapp.com",
    databaseURL: "https://thegreatwave-d66fa.firebaseio.com",
    projectId: "thegreatwave-d66fa",
    storageBucket: "thegreatwave-d66fa.appspot.com",
    messagingSenderId: "214252086151",
    appId: "1:214252086151:web:fc0c59873250667667e922",
    measurementId: "G-SH6FZ13VC8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore(); 
  db.settings({timestampsInSnapshots: true});


  document.addEventListener('DOMContentLoaded',function(){
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.collapsible.init(items);
  });
/*
  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
  }
*/
  const signupForm = document.querySelector('#loginmodal');
  signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user)
    })

  })

  function signIn(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
  }