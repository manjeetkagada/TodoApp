import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { display } from '@mui/system';
import Todo from './Todo';
import { useEffect, useState } from 'react';
import {collection,addDoc ,serverTimestamp,getDocs, doc} from "firebase/firestore"
import database from "./firebase_config";

function App() {
const [todoInput,setTodoInput]=useState("");
const [todos,setTodos]=useState([]);

const todosAppRef=collection(database,"todos");


useEffect(()=>{
gettodo();
},[todos]);


const gettodo= async ()=>{
  const data= await getDocs(todosAppRef);
  setTodos(data.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id
  })))
}

const addTodo= async (e)=>{
  e.preventDefault();
   await addDoc(collection(database,"todos"),{
    todo:todoInput,
    inprogress:"true",
    timestamp:serverTimestamp(),
  });
  setTodoInput("");
}
  const styles_todo={
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"2%",
   
   
   
  }
  return (

    <div className="App" style={styles_todo}>

      <form>
      <h1 style={{color:"white"}}>TODO App: Record Your Daily Todo's</h1>
      <TextField onChange={(event)=>setTodoInput(event.target.value)} value={todoInput} id="standard-basic" label="Write Todo" variant="standard" style={{width:"100%",color:"#2C74B3"}}/>
      <Button type='submit' variant="contained" onClick={addTodo} style={{display:"none",backgroundColor:"#BFEAF5",color:"#0A2647"}} >add</Button>
      </form>

      {todos.map((todo)=>{
        return (
          <Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;
