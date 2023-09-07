import './navbar.scss';
import React from 'react';
import Logo from '../../assets/p4t.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="navContainer">
                <div className="left">
                    <img 
                        src={Logo} 
                        alt=""
                        width="100"
                        height="70"
                        className='logo'
                    />
                    <Link to="/" className='link'>
                        <span>Home</span>
                    </Link>
                    <div>About</div>
                    <div className="dropdown">
                        <ExpandMoreIcon className="icon"/>
                        <div className="options">
                            <Link to='/what-we-do' className='link'>
                                <span>Who we are</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='/what-we-do' className='link'>  
                                <span>Our Team</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Our History</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >FAQ</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Contact Us</span>
                            </Link>
                        </div>
                    </div>
                    <div>What we do</div>
                    <div className="dropdown">
                        <ExpandMoreIcon className="icon"/>
                        <div className="options">
                            <Link to='' className='link'>
                                <span>Education</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span>Livelihood</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Child Protection</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Health</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Our Impact</span>
                            </Link>
                        </div>
                    </div>
                    <div>Support us</div>
                    <div className="dropdown">
                        <ExpandMoreIcon className="icon"/>
                        <div className="options">
                            <Link to='' className='link'>
                                <span>Keep a child in School</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span>Support a family</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Build a School</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Protect a child</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Donate tablets, laptops</span>
                            </Link>
                        </div>
                    </div>
                    <div>Get involved</div>
                    <div className="dropdown">
                        <ExpandMoreIcon className="icon"/>
                        <div className="options">
                            <Link to='' className='link'>
                                <span>Partner with us</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span>Donate</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Career in P4T</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Volunteer</span>
                            </Link>
                            <hr className='text-primary'/>
                            <Link to='' className='link'>  
                                <span >Contact Us</span>
                            </Link>
                        </div>
                    </div>
                    <Link to='' className='link'>
                        <span className='navbarmainLinks'>News</span>
                    </Link>
                </div>
                <div className="right">
                    <Link to=''>
                        <FacebookIcon className='icon'/>
                    </Link>
                    <Link to=''>
                        <InstagramIcon className='icon'/>
                    </Link>
                    <Link to=''>
                        <YouTubeIcon className='icon'/>
                    </Link>
                    <Link to=''>
                        <button className=''>
                            Donate
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;