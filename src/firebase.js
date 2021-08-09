import  firebase from "firebase" ;


const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyCEzeVowILxlD1ed3vRJ81QmSTD3xN8AYM",
  authDomain: "instagram-clone-cac35.firebaseapp.com",
  projectId: "instagram-clone-cac35",
  storageBucket: "instagram-clone-cac35.appspot.com",
  messagingSenderId: "38828826397",
  appId: "1:38828826397:web:7aac03bcc3669f0ad2cbf4",
  measurementId: "G-G6CYQBD8ET"

  });



  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export{db,auth,storage};

