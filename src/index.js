import * as React from "react";
import './style.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Error from './pages/404error/404error'
import About from "./pages/about/about";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/accommodationsheet" />
        <Route path="/404error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
