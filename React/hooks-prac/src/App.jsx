import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [render,setRender] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false);
    },5000)
  },[]); 

  return (
   
   <>
      {render ? <MyComponent/> : <div></div> }
    </>
  )
}
// function component:

function MyComponent(){
  // const[count,setCount] = useState(0);

  // const incrementCount = () =>{
  //   setCount(count+1);
  // }
  // return(
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={incrementCount}>Increment</button>
  //   </div>
  // )

  useEffect(()=>{
    console.log("component mounted!");
    return ()=>{
      console.log("component unmounted!");
    };
  },[]); // if there is any object in dependency array in first the thing in return statement
        // runs then 'component mounted' runs
  return <div>
    from inside the mounted component
  </div>

} 


//class based component 

// class MyComponent extends React.Component{
//   componentDidMount(){
//     console.log("component mounted");
//   }
//   componentWillUnmount(){
//     console.log("unmounted");
//   }
//   return(){
//     return <div>hi there</div>
//   }
// }

export default App
