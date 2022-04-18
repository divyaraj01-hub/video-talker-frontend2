import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpko3Z-Gs-IztSteAPkrPkqmNS0OjSxEo",
    authDomain: "videotalker-a3b56.firebaseapp.com",
    projectId: "videotalker-a3b56",
    storageBucket: "videotalker-a3b56.appspot.com",
    messagingSenderId: "463027435681",
    appId: "1:463027435681:web:e218f0294d33b7450198e0"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export {app , auth}