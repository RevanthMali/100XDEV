import './App.css'
import {RevenueCard} from "./components/RevenueCard"
function App() {

  return (
    <div className='grid grid-cols-3'>
    <RevenueCard title={"Amount pending"} amount={"92,3100"} orderCount={12}/>
    <RevenueCard title={"Amount pending"} amount={"92,3100"} orderCount={12}/>
    <RevenueCard title={"Amount pending"} amount={"92,3100"} orderCount={12}/>

    </div>
  )
}

export default App
