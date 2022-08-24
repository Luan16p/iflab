import * as React from 'react';
import './style.css';
import './mobileAdapt.css';
import './Animations.css';
import { BrowserRouter } from 'react-router-dom';
import Warn from './Container/Warn';
import Header from './Container/Header';
import Footer from './Container/Footer';
import Container from './Container/Container';

export default function App() {
  console.clear();
  return (
    <BrowserRouter>
      <Header />
      <Container />
      <Footer />
    </BrowserRouter>
  );
}
