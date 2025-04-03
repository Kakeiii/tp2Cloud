import 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Inscription from './authentification/Inscription';
import UserProfile from './pages/UserProfile';
import Actifs from './pages/Actifs';
import Transactions from './pages/Transactions';
import Chansons from './pages/Chansons';
import NotFound from './pages/NotFound';
import Footer from './navbar/Footer';
import About from './pages/About';
import Budget from './pages/Budget';
import Login from './authentification/Login';
import HomePage from './pages/HomePage';
import { useState } from 'react';


function App() {

  const [auth, setAuth] = useState(false);

  return (
    
    <BrowserRouter>
      <div>

        <Routes>
          <Route path='/Dashboard' element={<Dashboard auth={auth} setAuth={setAuth} />} />
          <Route path='/Inscription' element={<Inscription />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/Budget' element={<Budget />} />
          <Route path='/Budget/Actifs' element={<Actifs />} />
          <Route path='/Budget/Transactions' element={<Transactions />} />
          <Route path='/Chansons' element={<Chansons />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/Inscription' element={<Inscription/>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Homepage' element={<HomePage/>} />
          <Route path='/Inscription' element={<Inscription/>} />
          <Route path='/Login' element={<Login setAuth={setAuth}/>} />
  
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;