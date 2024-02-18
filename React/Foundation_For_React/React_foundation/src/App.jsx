import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

let state ={
  count: 0
}
function App() {
  const [count,setCount] = useState(0);
  // function onClickHandler(){
  //   setCount(count+1);
  //   // state.count = state.count +1; this is not the right way to update a state variable instead user a fucntion 'setCount'
  // }
  return (
    <div>
    {/* <button onClick={onClickHandler}>Counter:{count}</button> */}
       {/* custom components creation */}
      <CustomButton count={count} setCount = {setCount}></CustomButton>
      <CustomButton count={count+1} setCount = {setCount}></CustomButton>
      <CustomButton count={count-1} setCount = {setCount}></CustomButton>
      <CustomButton count={count*2} setCount = {setCount}></CustomButton>
    </div>
  ) 
  // component- with this we can create various custom action which update dynamically
  function CustomButton(props){
    function onClickHandler(){
      props.setCount(props.count+1);
    }
    return <button onClick={onClickHandler}>Counter: {props.count}</button>
  }

  
}

export default App
 