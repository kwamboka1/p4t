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
import ECD from './pages/ecd/Ecd';
import Primary from './pages/primary/Primary';
import SupportP4t from './pages/supportP4t/SupportP4t';
import SupportFamily from './pages/supportFamily/SupportFamily';
import KeepChildSchool from './pages/keepChildSchool/KeepChildSchool';
import ProtectChild from './pages/protectChild/ProtectChild';
import BuildSchool from './pages/buildSchool/BuildSchool';
import Partner from './pages/partner/Partner';

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
                        path='/ecd'
                        element={<ECD />}
                    />
                    <Route 
                        path='/primary'
                        element={<Primary />}
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
                    <Route 
                        path='/support-p4t'
                        element={<SupportP4t />}
                    />
                    <Route
                        path='/support-a-family'
                        element={<SupportFamily />}
                    />
                    <Route 
                        path='/keep-a-child-in-school'
                        element={<KeepChildSchool />}
                    />
                    <Route
                        path='/protect-a-child'
                        element={<ProtectChild />} 
                    />
                    <Route 
                        path='/build-a-school'
                        element={<BuildSchool />}
                    />
                    <Route 
                        path='/partner-with-us'
                        element={<Partner />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
