import React,{Fragment} from "react"
import { useState } from "react"

// function App() {
//   // const [title,setTitle] = useState("My name is Revanth1");
//   // function updateTitle(){
//   // setTitle("my name is " + Math.random());
//   // }
//   // return ( 
//   //   <div>
//   //   {/* <HeaderWithButton/> */} 
//   //     <button onClick={updateTitle}>click me to change the title</button>
//   //     <Header title={title}></Header>
//   //     <Header title='Revanth2'></Header>
//   //     <Header title='Revanth3'></Header>
//   //     </div>
//   // )  


//   const [todos,setTodos] = useState([{
//     id:1,
//     title:"go to gym",
//     description:"go to gym today"
//   },{
//     id:2,
//     title: "eat food",
//     description:"Have a good food"
//   }
// ])
// function addTodo(){
//   // setTodos([...todos,{
//   //   id:4,
//   //   title: Math.random(),
//   //   description: Math.random()
//   // }])
//   const newTodos = [];
//   for(let i=0;i<todos.length;i++){
//     newTodos.push(todos[i]);
//   }
//   newTodos.push({
//     id:4,
//     title: Math.random(),
//     description: Math.random()
//   })
//   // existing todos + 1
//   setTodos(newTodos);
// }
// return(
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description ={todo.description}/>)}
//     </div>
// )
// } 

// this prevents the re-rendering of the components
// function HeaderWithButton(){
//   const [title,setTitle] = useState("My name is Revanth1");
//   function updateTitle(){
//   setTitle("my name is " + Math.random());
//   }
//   return <div>
//     <button onClick={updateTitle}>click me to change the title</button>
//     <Header title={title}></Header>
//   </div>

// } 

//can also do this with the help of React.memo{memo prevents the re-renders of the unchanged props}
 
// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// }) 



// function Todo({title,description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

//Wrapper components

// function App(){
//   return <div> 
//   <CardWrapper>
//     <div>
//         Hi there!
//     </div>
//       </CardWrapper>
//   <CardWrapper>
//     <div>
//         Hi there!
//     </div>
//       </CardWrapper>
//   </div> 
// }
  
// function CardWrapper({children}){
//     return <div style={{
//       border: "2px solid black",
//       padding:20,
//       color:"green"
//       }}>
//        {children}
//     </div>
// } 



export default App
