import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCq2UPrRO05VlnWE_kul5f10Uh6L8tm2m4",
  authDomain: "react-chat-2952c.firebaseapp.com",
  projectId: "react-chat-2952c",
  storageBucket: "react-chat-2952c.appspot.com",
  messagingSenderId: "658257926319",
  appId: "1:658257926319:web:0270175afe37b5fe165c5a"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth)
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
  <section>{user? <Chatroom/>: <SignIn/>}</section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

  }
  return(
    <button onClick = {signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={()=>{auth.signOut()}}>Sign Out</button>
  )
}

export default App;
