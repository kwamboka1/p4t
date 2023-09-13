import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Board from './pages/board/Board';
import History from './pages/history/History';
import Contact from './pages/contact/Contact';

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
                        path='/who-we-are'
                        element={<About />}
                    />
                    <Route 
                        path='/team'
                        element={<Team />}
                    />
                    <Route 
                        path='/board'
                        element={<Board />}
                    />
                    <Route 
                        path='/history'
                        element={<History />}
                    />
                    <Route 
                        path='/contact'
                        element={<Contact />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
