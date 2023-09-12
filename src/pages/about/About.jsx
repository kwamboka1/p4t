import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './about.scss';
import React from 'react';
import abtImg from '../../assets/p4t-pupils.jpeg';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='about intro'>
                <div className='text-center intro-text'>
                    <h2>WHO WE ARE</h2>
                    <h6><em>"We build tomorrow"</em></h6>
                </div>
            </div>
            <div className='container abt-text'>
                <div className='row'>
                    <h3 className='text-center py-5'>ABOUT PLANNING FOR TOMORROW (P4T)</h3>
                    <p className='text-center'>
                        <em>
                            <strong>Planning for Tomorrow (P4T)</strong> is a volunteer-based, 
                            non-profit organization started by <strong>refugee youth</strong> in 
                            November 2007 in Kyangwali refugee settlement, Kikuube district, Uganda 
                            which was legal registered in 2013 with <strong>Registration number 
                            CD/WG/0199/13</strong> and Incorporated <strong>URSB Registration No: 
                            80020002652537.</strong>
                        </em>
                    </p>
                    <p className='text-center'>
                        <em>
                            In 2021, P4T was fully registered in <strong>Norway</strong> with 
                            <strong>Registration number 926 924 826</strong> with the main purpose 
                            to fundraise and raise resources needed to support P4T's projects in Uganda 
                            and also to promote multicultural diversity in Norway by promoting 
                            Integration and intercultural dialogue and work with a diverse and inclusive society.
                        </em>
                    </p>
                    <div className='col-md-6'>
                        <p>
                            The founders arrived in Kyangwali Refugee settlement from DR-CONGO, 
                            South Sudan, Rwanda, Kenya and Burundi, along with thousands of refugees 
                            fleeing war, violence, hunger and problems resulting from conflicts in 
                            their home countries since 1996. Today, there are over 1.5 million refugees 
                            in Uganda and 80% are children and women. Uganda is the third largest 
                            refugee host country in the world and the largest refugee host country 
                            in Africa.
                        </p>
                        <p>
                            We are seeking to bring solutions to refugees and the host community’s most 
                            touching, top three issues identified in Uganda, which is, Education, 
                            Unemployment and Health, by providing quality education, health, livelihood 
                            and Child protection/community service. We believe that by using the people 
                            who are part of the community suffering the problems, the best solutions 
                            can be achieved. We therefore use the Human Centre Design (HCD) approach, 
                            a Bottom-Up Strategy as there is nothing for us without us.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <img 
                            src={abtImg}
                            alt=''
                            width='100%'
                            height='100%'
                        />
                    </div>
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
                <div className='row'>
                    <div className='col-md-6 pt-5'>
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
                    <div className='col-md-6'>
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
            </div>
            <Footer />
        </div>
    )
};

export default About;
