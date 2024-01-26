import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './about.scss';
import React from 'react';
import abtImg from '../../assets/p4t-pupils.jpeg';
import Sec from '../../assets/p4t-sec.jpeg';
import Prim from '../../assets/primary.jpeg';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className=''>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img 
                                src={abtImg}
                                className="d-block w-100" 
                                alt="Slide 1" 
                            />
                            <div className="carousel-caption">
                                <div class="px-4 py-5 my-5 text-center">
                                    <h2 className="display-5 fw-bold">
                                        WHO WE ARE
                                    </h2>
                                    <div className="col-lg-6 mx-auto">
                                        <h6 className='lead mb-4'><em>"We build tomorrow"</em></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img 
                                src={Sec} 
                                className="d-block w-100" 
                                alt="Slide 2" 
                            />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h2 className="display-5 fw-bold">
                                        LOREM IPSUM
                                    </h2>
                                    <div className="col-lg-6 mx-auto">
                                        <h6 className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea, 
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img 
                                src={Prim} 
                                className="d-block w-100" 
                                alt="Slide 2" 
                            />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h2 className="display-5 fw-bold">
                                        LOREM IPSUM
                                    </h2>
                                    <div className="col-lg-6 mx-auto">
                                        <h6 className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea,
                                        </h6>
                                    </div>
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
            <div className='container abt-text'>
                <div className='p-5'>
                    <p>
                        <strong>Planning For Tomorrow Youth Organisation (P4T)</strong>  is a volunteer-based, 
                        non-profit organization which was started by <strong>refugees</strong> in November 2007 
                        in Kyangwali refugee settlement, Kikuube district, Uganda. It was legally registered in 
                        2013 with <strong>Registration number CD/WG/0199/13</strong> and Incorporated with
                        <strong>URSB Registration No: 80020002652537.</strong>
                    </p>
                    <p>
                        In 2021, P4T was fully registered in <strong>Norway</strong> with <strong>Registration 
                        number 926 924 826</strong> with the main purpose of fundraising resources to support 
                        P4T's projects in Uganda and also to promote multicultural diversity in Norway by promoting 
                        integration and intercultural dialogue and work with a diverse and inclusive society.
                    </p>
                    <p>
                        P4T works in four thematic areas of <strong>Education, Health, Livelihoods</strong> and 
                        <strong>Protection & Community Services.</strong> 
                    </p>
                    <p>
                        According to UNHCR, there are over 1.5 million refugees in Uganda and 80% are children and 
                        women. Uganda is the third largest refugee host country in the world and the largest refugee 
                        host country in Africa.
                    </p>
                    <p>
                        We seek to alleviate the suffering of millions of refugees and host communities and promote 
                        coexistence for a self-reliant and sustainable humanity.
                    </p>
                    <p>
                        We believe that by using the people who are part of the community suffering the problems, 
                        the best solutions can be achieved. We therefore use the Human Centre Design (HCD) approach, 
                        a Bottom-Up Strategy in designing our projects because there is nothing for us without us.
                    </p>
                </div>
                <div className='p-5'>
                    <hr />
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='mission'>
                                <h5>Our Mission</h5>
                                <h6>
                                    Empowering communities to be healthy and self-reliant through 
                                    provision of knowledge and skills
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <h5>To reach this mission, P4T focuses on two strategic goals:</h5>
                            <ul>
                                <li>
                                    Promoting self-reliance through knowledge and skills, and
                                </li>
                                <li>
                                    Advocating for a healthy community.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <div className='p-5'>
                        <h5 className='pt-4'>
                            P4T programming is guided by the following five strategic objectives:
                        </h5>
                        <div>
                            <LabelImportantIcon />
                            <span>To enable sustainable community development initiatives through knowledge and innovation</span>
                        </div>
                        <div>
                            <LabelImportantIcon />
                            <span>To build income generating capacity through skills training.</span>
                        </div>
                        <div>
                            <LabelImportantIcon />
                            <span>To improve individuals' psychological and physical wellbeing.</span>
                        </div>
                        <div>
                            <LabelImportantIcon />
                            <span>To positively contribute to a safe and peaceful community through sensitization.</span>
                        </div>
                        <div>
                            <LabelImportantIcon />
                            <span>To educate the community on the importance of a clean and protected environment.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='p-5'>
                    <h5>
                        P4T’s core values
                    </h5>
                    <h6>
                        We are guided by and strive to uphold the following core values in all 
                        the activities we undertake:
                    </h6>
                    <ul>
                        <li>
                            <strong>Integrity: </strong>
                            We are transparent and honest in all we do, keeping our promise to all stakeholders.
                        </li>
                        <li>
                            <strong>Commitment: </strong>
                            Stand beside and advocate for those who have been denied choice and 
                            opportunity. We recognize and use the power of diversity to achieve 
                            more together.
                        </li>
                        <li>
                            <strong>Empowerment: </strong>
                            Empower poor and marginalized people to take charge of their own 
                            development. Share skills and knowledge to create long lasting, 
                            sustainable change.
                        </li>
                        <li>
                            <strong>Equality: </strong>
                            Promote diversity and equality throughout our work.
                        </li>
                        <li>
                            <strong>Humanity: </strong>
                            We value respect, acceptance, consideration, appreciation, listening, 
                            openness, affection, empathy and love towards other human beings.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;
