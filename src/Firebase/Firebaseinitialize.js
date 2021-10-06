import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const initializeAuth=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuth;