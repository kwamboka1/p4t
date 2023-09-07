import './App.scss';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact
            path='/'
            element={<Home />}
          />
          <Route 
            exact
            path='/about'
            element={<About />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
