import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrB_IQblF-oDyPWeuxjCocjlTQEFlBCl8",
  authDomain: "uber-next-clone-f5c59.firebaseapp.com",
  projectId: "uber-next-clone-f5c59",
  storageBucket: "uber-next-clone-f5c59.appspot.com",
  messagingSenderId: "1037695052896",
  appId: "1:1037695052896:web:c0b03296736ba8f359e705"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };