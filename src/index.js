import * as React from "react";
import './style.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/Accommodationpage/:id" element={<Accommodationpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
