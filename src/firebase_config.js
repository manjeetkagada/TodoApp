import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbmoNcpsbcLUgq7j_7k1o8OmigLihUErw",
  authDomain: "todo-app-83518.firebaseapp.com",
  projectId: "todo-app-83518",
  storageBucket: "todo-app-83518.appspot.com",
  messagingSenderId: "369060161226",
  appId: "1:369060161226:web:ed67173bc2ea0451ee3633"
};


const app = initializeApp(firebaseConfig); 

const database=getFirestore(app);



export default database;