import * as React from "react";
import './style.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Error from './pages/error/Error'
import About from './pages/about/About'
import Accommodationpage from './pages/accommodationpage/Accommodationpage'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/accommodation/:id" element={<Accommodationpage />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
