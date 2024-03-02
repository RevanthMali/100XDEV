// import  { Suspense,lazy } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));
import { useState } from 'react';
import './App.css';

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

// export default App; 


function App(){ 
  const [count,setCount] = useState(0);
  return (
    <div>
      <Count/>
      <Buttons/>
    </div>
  )
} 
function Count(){

 }
function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}
