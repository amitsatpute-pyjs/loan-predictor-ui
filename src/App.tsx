
import './App.css'
import Navbar from './components/Navbar'
import { SocketContext, socket } from './core/context/socket';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home';
import { AdminPage } from './pages/admin';
import { UserDataContext, userDataContext } from './core/context/UserData';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <UserDataContext.Provider value={userDataContext}>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </SocketContext.Provider>

  )
}

export default App
