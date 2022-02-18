import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1> Hats Page here</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
