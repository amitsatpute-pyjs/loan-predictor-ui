
import './App.css'
import Navbar from './components/Navbar'
import StepperForm from './components/StepperForm';
import { SocketContext, socket } from './core/context/socket';

function App() {
  return (
    <SocketContext.Provider value={socket}>
       <Navbar></Navbar>   
       <div className='py-10'>
       <StepperForm></StepperForm> 
        </div> 
      
    </SocketContext.Provider>

  )
}

export default App
