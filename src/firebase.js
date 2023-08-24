import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyB2GRTMV72ManeJhudB68216eKHsYOkmD8",
    authDomain: "uploadimage-420c0.firebaseapp.com",
    projectId: "uploadimage-420c0",
    storageBucket: "uploadimage-420c0.appspot.com",
    messagingSenderId: "1027084359364",
    appId: "1:1027084359364:web:d026849779be2a4ae21b91"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);