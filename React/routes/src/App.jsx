// import  { Suspense,lazy } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));
import { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes> 
//           <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate('/');
//           }}
//         >
//           Landing page
//         </button>

//         <button
//           onClick={() => {
//             navigate('/dashboard');
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }



function App(){ 
  const [count,setCount] = useState(0);
  return (
    <div> 
      <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}/>
        </CountContext.Provider> 
    </div>
  )
} 
function Count({count,setCount}){
  return <div>
    <CountRenderer count = {count}/>
    <Buttons setCount={setCount}/>
  </div>
 } 
 function CountRenderer(){
   const count = useContext({CountContext});
   return <div>
    {count}
  </div>
 }
 function Buttons({setCount}){ 
   const count = useContext({CountContext});
   return <div>  
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App; 