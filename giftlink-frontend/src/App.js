import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const navigate = useNavigate();
  return (
    <>
        <Navbar/>
        <Routes>
          {/* the final code will not pass the products to every page, but each page will call the server API */}
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
        </Routes>
        </>
  );
}

export default App;
