import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Bg from '../../assets/p4t-pupils.jpeg';
import Bg2 from '../../assets/hospital.jpg';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyIcon from '@mui/icons-material/Key';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Bg} className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption">
                                <div className='centered'>
                                    <h2>Planning Fot Tomorrow Organisation</h2>
                                    <p>Your text for Slide 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={Bg2} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption text">
                                <div className='centered'>
                                    <h2>Health</h2>
                                    <p>Your text for Slide 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
            <div className="section-bg">
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h6>
                            <FormatQuoteIcon className='icon' />
                            3.7 Million refugee children are out of school according to UNHCR
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h6>
                            <FormatQuoteIcon className='icon' />
                            Uganda has over 1,5 million refugees, of which over 80% are women and children
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h6>
                            <FormatQuoteIcon className='icon' />
                            86% of refugee secondary school students and25% of primary school children in 
                            Uganda remain out-of-school.
                        </h6>
                    </div>
                </div>
            </div>
            <div className='container statements'>
                <div className='row text-center p-5'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RadioButtonCheckedIcon className='icon' />
                        <h5>Our Mission</h5>
                        <h6>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, aperiam. Dolorem nesciunt sint quis ut,
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RemoveRedEyeIcon className='icon' />
                        <h5>Our Vision</h5>
                        <h6>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, aperiam. Dolorem nesciunt sint quis ut,
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 md-screen'>
                        <KeyIcon className='icon' />
                        <h5>Our Values</h5>
                        <h6>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, aperiam. Dolorem nesciunt sint quis ut,
                        </h6>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <h3 className='text-center'>Our Impact</h3>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='circle'>
                            <div className='indicator text-center'>
                                12,000+<br /> Both Refugees and Nationals Students we have educated.
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='circle'>
                            <div className='indicator text-center'>
                                Provided direct health services to 6,000+ patients and trained 230 health workers.
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='circle'>
                            <div className='indicator text-center'>
                                5,000 child protection<br /> and GBV cases supported and referred and 1,500 households received relief food items to survive.
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='circle'>
                            <div className='indicator text-center'>
                                1,200 trained<br /> in marketable vocational and entrepreneurship skills program
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;

