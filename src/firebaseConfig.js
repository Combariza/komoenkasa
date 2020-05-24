import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpfviUCLJ48iwY4pKeNzbUkv0O70Y4hrw",
    authDomain: "recetascombariza.firebaseapp.com",
    databaseURL: "https://recetascombariza.firebaseio.com",
    projectId: "recetascombariza",
    storageBucket: "recetascombariza.appspot.com",
    messagingSenderId: "1089054971848",
    appId: "1:1089054971848:web:3ed4872c322dcd675d52fd",
    measurementId: "G-3CM9MJJK1N"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const firebaseAnalytics = Firebase.analytics();
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')