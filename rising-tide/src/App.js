import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Treats from './pages/Treats';
//test
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Treats" element={<Treats />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
