
import './App.css'
import Navbar from './components/Navbar'
import { SocketContext, socket } from './core/context/socket';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home';
import { AdminPage } from './pages/Admin';
import { UserDataContext, userDataContext } from './core/context/UserData';
import { DetailsPage } from './pages/Details';
import { Tracker } from './pages/Tracker';
import { LoginPage } from './pages/Login';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <UserDataContext.Provider value={userDataContext}>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/track" element={<Tracker />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/details/:loanid" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </SocketContext.Provider>

  )
}

export default App
