import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Board from './pages/board/Board';
import History from './pages/history/History';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Livelihood from './pages/livelihood/Livelihood';
import ChildProtection from './pages/childProtection/ChildProtection';
import Health from './pages/health/Health';

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
                    <Route 
                        path='/education'
                        element={<Education />}
                    />
                    <Route 
                        path='/livelihood'
                        element={<Livelihood />}
                    />
                    <Route 
                        path='/child-protection'
                        element={<ChildProtection />}
                    />
                    <Route 
                        path='/health'
                        element={<Health />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
