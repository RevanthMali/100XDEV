import { useMemo } from 'react';
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom,totalnotificationcount } from './atoms'
import {RecoilRoot,useRecoilValue} from "recoil"
function App() {
    return <RecoilRoot>
      <MainApp/>
    </RecoilRoot>

  
}
function MainApp(){
  const networknotificationcount = useRecoilValue(networkAtom);
  const jobsnotificationcount = useRecoilValue(jobsAtom);
  const notificationcount = useRecoilValue(notificationAtom);
  const messagingnotificationCount = useRecoilValue(messagingAtom);
  // this is a better approach to get the total notification count by using the selector 
  const totalNotificationCount = useRecoilValue(totalnotificationcount);
 
 // this can also work but  using the selector could be the better approach 

  // const finalnotificationCount = useMemo(()=>{
  //    return networknotificationcount+ jobsnotificationcount + notificationcount + messagingnotificationCount;
  // },[networknotificationcount, jobsnotificationcount , notificationcount , messagingnotificationCount])
  
  return (
    <>
    <button>Home</button>
    <button>My Network({networknotificationcount>=100?"99+":networknotificationcount})</button>
    <button>Jobs({jobsnotificationcount>=100?"99+":jobsnotificationcount})</button>
    <button>messaging({messagingnotificationCount})</button>
    <button>Notifications({notificationcount>=100?"99+":notificationcount})</button>
    {/* <ButtonUpdater/> */} 
    <button>Me({totalNotificationCount})</button>
    </>
  )
}
// function ButtonUpdater(){ 
//   // if only a single value is needed and it is to be updated we can use useSetRecoilState hook
//   const  setMessagingAtomCount= useSetRecoilState(messagingAtom);
//   return <button onClick={()=>{
//     setMessagingAtomCount( c=>c+1);
//   }}>Me</button>
// }

export default App
