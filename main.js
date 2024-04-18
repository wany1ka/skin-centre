  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDJKD6l8fVsF-_bINHB_CU8s3EGFjUvDwQ",
    authDomain: "skin-centre-login.firebaseapp.com",
    projectId: "skin-centre-login",
    storageBucket: "skin-centre-login.appspot.com",
    messagingSenderId: "537776208006",
    appId: "1:537776208006:web:95d16874874e7688953907"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index2.html"

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  })