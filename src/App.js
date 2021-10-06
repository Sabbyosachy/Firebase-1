import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuth from './Firebase/Firebaseinitialize';

initializeAuth();
const provider = new GoogleAuthProvider();
function App() {

const[user,setUser]=useState({});
const handleclick=()=>{
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
    const {displayName,email,photoURL} = result.user;
   const LoginUser={
     name:displayName,
     email:email,
     photo:photoURL
   };
   setUser(LoginUser);
})
.catch((error) =>{

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
})
}
  return (
    <div className="App">
      <button onClick={handleclick}>Click</button>
      <br />

      {
        user.email && <div>
          <h2>Welcome {user.name}</h2>
          <p>email: {user.email}</p>
        </div>
      }
    </div>
  );
}
export default App;
