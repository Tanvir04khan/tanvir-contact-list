import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCij3uqRB0vXZFOysJT_0Kp334W1Ud0ezY",
  authDomain: "tanvir-contact-app.firebaseapp.com",
  databaseURL: "https://tanvir-contact-app-default-rtdb.firebaseio.com",
  projectId: "tanvir-contact-app",
  storageBucket: "tanvir-contact-app.appspot.com",
  messagingSenderId: "951031199087",
  appId: "1:951031199087:web:68203c70d69376164f249a",
  measurementId: "G-NSPLNY3X7B",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
