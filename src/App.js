import React, { Component }  from 'react';
import "./App.css";
import Home from "./pages/Home.js";
import Empresa from "./pages/Empresa.js";
import Contato from "./pages/Contato.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact='true' path="/" element={<Home />}></Route>
            <Route path="/empresa" element={<Empresa />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;