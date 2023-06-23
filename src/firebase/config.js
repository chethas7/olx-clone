import firebase from "firebase";
import 'firebase/firebase'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA2QXUSvAfub9JcAZzlS9Oddg461UB-wd4",
//   authDomain: "olx-react-js-954a6.firebaseapp.com",
//   projectId: "olx-react-js-954a6",
//   storageBucket: "olx-react-js-954a6.appspot.com",
//   messagingSenderId: "36762427584",
//   appId: "1:36762427584:web:50434a1a0bac196fb60d25"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGI3azkKdT6Uz3ozVLm-IqPPQ-aXdfdc",
  authDomain: "demoreact-7f871.firebaseapp.com",
  databaseURL: "https://demoreact-7f871-default-rtdb.firebaseio.com",
  projectId: "demoreact-7f871",
  storageBucket: "demoreact-7f871.appspot.com",
  messagingSenderId: "149293709581",
  appId: "1:149293709581:web:a47a0009173977a02fd844",
  measurementId: "G-VSJHX2MTYX"
};

  export default firebase.initializeApp(firebaseConfig)