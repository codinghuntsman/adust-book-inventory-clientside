import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


//---------firebase initialization and configuration----------
const firebaseConfig = {
    apiKey: "AIzaSyDaCGR-VqhLhhcIqDt5KM14SctUMa4J7o4",
    authDomain: "a11-authentication.firebaseapp.com",
    projectId: "a11-authentication",
    storageBucket: "a11-authentication.appspot.com",
    messagingSenderId: "572824596335",
    appId: "1:572824596335:web:71b38efcd233386826429a"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;