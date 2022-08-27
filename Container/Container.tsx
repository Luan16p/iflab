import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import FQA from '../Pages/FQA/FQA';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Hours from '../Pages/Hours/Hours';
import PageNotFound from '../Pages/Error/PageNotFound';

export default function Container() {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fqa" element={<FQA />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
