import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth ,GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account & login");

    }
})

updateUserProfile();