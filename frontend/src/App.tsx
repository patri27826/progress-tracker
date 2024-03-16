import React from 'react';
import './App.css';
import 'primereact/resources/themes/mira/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
