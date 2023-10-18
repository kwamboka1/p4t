import './navbar.scss';
import React from 'react';
import Logo from '../../assets/p4t.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const iconColor = isScrolled ? 'var(--main-orange)' : 'var(--main-black)';

    return (
        <div className={isScrolled ? 'navbar scrolled navbar-expand-lg' : 'navbar navbar-expand-lg'}>
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img 
                        src={Logo}
                        alt=""
                        width="90"
                        height="90"
                        className="mx-5"
                    />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavDarkDropdown" 
                    aria-controls="navbarNavDarkDropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link to="/" className="link nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-light">
                                <li>
                                    <Link to="/who-we-are" className="dropdown-item" >Who we are</Link>
                                </li>
                                <li>
                                    <Link to="/team" className="dropdown-item" >Our Team</Link>
                                </li>
                                <li>
                                    <Link to="/board" className="dropdown-item" >Our Board</Link>
                                </li>
                                <li>
                                    <Link to="/history" className="dropdown-item" >Our History</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="dropdown-item" >Contact us</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                What we do
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-light">
                                <li>
                                    <Link to="/education" className="dropdown-item" >Education</Link>
                                </li>
                                <li>
                                    <Link to="/livelihood" className="dropdown-item" >Livelihood</Link>
                                </li>
                                <li>
                                    <Link to="/child-protection" className="dropdown-item" >Child Protection</Link>
                                </li>
                                <li>
                                    <Link to="/health" className="dropdown-item" >Health</Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item" >Our Impact</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Support us
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-light">
                                <li>
                                    <Link to="/support-p4t" className="dropdown-item" >Support P4T</Link>
                                </li>
                                <li>
                                    <Link to="/support-a-family" className="dropdown-item" >Support a family</Link>
                                </li>
                                <li>
                                    <Link to="/build-a-school" className="dropdown-item" >Build a school</Link>
                                </li>
                                <li>
                                    <Link to="/protect-a-child" className="dropdown-item" >Protect a child</Link>
                                </li>
                                <li>
                                    <Link to="/keep-a-child-in-school" className="dropdown-item" >Keep a child in school</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Get involved
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-light">
                                <li>
                                    <Link to="/partner-with-us" className="dropdown-item" >Partner with us</Link>
                                </li>
                                <li>
                                    <Link to="/career-in-p4t" className="dropdown-item" >Career in P4T</Link>
                                </li>
                                <li>
                                    <Link to="/volunteer" className="dropdown-item" >Volunteer</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="link nav-link">News</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="" className='link nav-link'>
                                {/* <button className='nav-btn fw-bold btn btn-primary btn-lg px-4 '> */}
                                    Donate
                                {/* </button> */}
                            </Link>
                        </li>
                    </ul>
                    <ul className="right navbar-nav ml-auto">
                        <li className='nav-item'>
                            <Link to='' className='nav-link'>
                                <FacebookIcon className='icon' style={{ color: iconColor }}/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='' className='nav-link'>
                                <InstagramIcon className='icon' style={{ color: iconColor }}/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='' className='nav-link'>
                                <YouTubeIcon className='icon' style={{ color: iconColor }}/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <div className='dropdown'>
                                <button
                                    className='fw-bold btn px-4 dropdown-toggle'
                                    type='button'
                                    id='languageDropdown'
                                    data-bs-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    <LanguageIcon className='icon' style={{ color: iconColor }} />
                                </button>
                                <div className='dropdown-menu' aria-labelledby='languageDropdown'>
                                    <button className='dropdown-item' type='button'>
                                        English
                                    </button>
                                    <button className='dropdown-item' type='button'>
                                        Norge
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;