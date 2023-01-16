import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from './models/models'
//const App: React.ReactNode=()=> {
const App: React.FC=()=> {
let name1: any;
let name11: unknown;
let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
type Person = {
  name: string
  age?: number|string,
}

let person: Person= {
   name: 'trevor',
   age: '18'
};

let letsofPeople: Person[];

let printName1: Function;
let printName11: (name: string) => void;
let printName111: (name: string) => never;

type X = {
a:string;
b: number;
}


type Y = X & {
c:string;
d: number;
}

let y: Y = {
c:'trevor',
d:45,
a:'tt',
b: 7
}

interface Person2  {
   name: string,
   age?: number
}

interface Pro extends Person2 {
   profession: string
}

function printName(name: string) {

console.log(name);
}

//const [todo, useTodo]=useState<string|number>("");
//const [todo, useTodo]=useState<string[]>("");
  const [todo, setTodo]=useState<string>("");
  const [todos, setTodos]=useState<Todo[]>([]);

   const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (todo) {
         setTodos([...todos, {id: Date.now(), todo, isDone:false}])
         console.log(todos);
      }
   }

console.log(todo)
  return (
    <div className="App">
      <h1>hello</h1>
      <span className="heading">Task</span>   
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> 
{todos.map((t)=>(
  <li>{t.todo}</li>
))}    
<TodoList />
 </div>
  );
}

export default App;
