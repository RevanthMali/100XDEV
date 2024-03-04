// import  { Suspense,lazy } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));
// import { useContext, useState } from 'react';
import { useMemo } from 'react';
import './App.css';
import { CountContext } from './context';
import { countAtom, evenSelector } from './store/atoms/count';
import {RecoilRoot,useRecoilValue,useSetRecoilState} from "recoil"
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

// context-API

// function App(){ 
//   const [count,setCount] = useState(0);
//   return (
//     <div> 
//       <CountContext.Provider value={count}>
//       <Count count={count} setCount={setCount}/>
//         </CountContext.Provider> 
//     </div>
//   )
// } 
// function Count({count,setCount}){
//   return <div>
//     <CountRenderer count = {count}/>
//     <Buttons setCount={setCount}/>
//   </div>
//  } 
//  function CountRenderer(){
//    const count = useContext({CountContext});
//    return <div>
//     {count}
//   </div>
//  }
//  function Buttons({setCount}){ 
//    const count = useContext({CountContext});
//    return <div>  
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Increase</button>
//     <button onClick={()=>{
//       setCount(count-1);
//     }}>Decrease</button>
//   </div>
// }



function App(){
  return(
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count({count,setCount}){
    return <div>
      <CountRenderer/>
      <Buttons/>
      <EvenCountRenderer/>
    </div>
   } 
   function CountRenderer(){
    // To actually get the value from the atom we use UseRecoilValue hook
     const count = useRecoilValue(countAtom);

     return <div>
      {count}
    </div>
   }
   function EvenCountRenderer(){
      const count = useRecoilValue(countAtom);
      // this logic(useMemo) will run only if the value of the count changes
      // const isEven = useMemo(()=>{
      //   return count%2==0;
      // },[count]); 
      // evenselector is declared in count.jsx as a selector 
      const isEven = useRecoilValue(evenSelector);
      return <div>
        {isEven ? "Its even value":null}
      </div>
   }
   function Buttons(){ 
    // usesetrecoilState re-renders only the componenet which keeps changing, reduces unnecessary er-renders
     const setCount= useSetRecoilState(countAtom);
    console.log("re-rendered")
     return <div>  
      <button onClick={()=>{
        setCount(count => count+1);
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count => count-1);
      }}>Decrease</button>
    </div>
  }

export default App; 