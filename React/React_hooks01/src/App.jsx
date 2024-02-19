import React,{Fragment} from "react"
import { useState } from "react"

function App() {
  const [title,setTitle] = useState("My name is Revanth1");
  function updateTitle(){
  setTitle("my name is " + Math.random());
  }
  return ( 
    <div>
    {/* <HeaderWithButton/> */} 
      <button onClick={updateTitle}>click me to change the title</button>
      <Header title={title}></Header>
      <Header title='Revanth2'></Header>
      <Header title='Revanth3'></Header>
      </div>
  )
} 

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



function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App
