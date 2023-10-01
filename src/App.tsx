
import './App.css'
import AdditionalInfoForm from './components/AdditionalInfoForm';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import UploadFiles from './components/UploadFiles'
import { SocketContext, socket } from './core/context/socket';



function App() {


  return (
    <SocketContext.Provider value={socket}>

      <Navbar></Navbar>
      <SignIn></SignIn>
      <UploadFiles></UploadFiles>
      <AdditionalInfoForm></AdditionalInfoForm>

    </SocketContext.Provider>


  )
}

export default App
