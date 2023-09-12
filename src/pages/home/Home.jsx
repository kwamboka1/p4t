import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Bg from '../../assets/p4t-pupils.jpeg';
import Bg0 from '../../assets/Bg0.jpg';
import Bg1 from '../../assets/Bg1.jpg';
import Bg4 from '../../assets/Bg4.jpg';
import Bg3 from '../../assets/Bg3.jpg';
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
                            <img src={Bg0} className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption">
                                <div class="px-4 py-5 my-5 text-center">
                                    <h1 className="display-5 fw-bold">
                                        Planning For Tomorrow Youth Organisation
                                    </h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="lead mb-4">
                                            Creating the tomorrow we all desire
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center extend">
                                            <button 
                                                type="button" 
                                                className="btn1 btn btn-primary btn-lg px-4 gap-3"
                                            >
                                                SUPPORT US
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn2 btn btn-outline-secondary btn-lg px-4"
                                            >
                                                ABOUT US
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={Bg} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h1 className="display-5 fw-bold">EDUCATION</h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea, 
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center extend">
                                            <button 
                                                type="button" 
                                                className="btn1 btn btn-primary btn-lg px-4 gap-3"
                                            >
                                                READ MORE
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn2 btn btn-outline-secondary btn-lg px-4"
                                            >
                                                DONATE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={Bg1} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h1 className="display-5 fw-bold">HEALTH</h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea,
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center extend">
                                            <button 
                                                type="button" 
                                                className="btn1 btn btn-primary btn-lg px-4 gap-3"
                                            >
                                                READ MORE
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn2 btn btn-outline-secondary btn-lg px-4"
                                            >
                                                DONATE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={Bg4} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h1 className="display-5 fw-bold">LIVELIHOOD</h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea, 
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center extend">
                                            <button 
                                                type="button" 
                                                className="btn1 btn btn-primary btn-lg px-4 gap-3"
                                            >
                                                READ MORE
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn2 btn btn-outline-secondary btn-lg px-4"
                                            >
                                                DONATE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={Bg3} className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption text">
                                <div class="py-5 my-5 text-center">
                                    <h1 className="display-5 fw-bold">CHILD PROTECTION</h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="lead mb-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Natus, illo. Nobis id quisquam dignissimos maxime ea, 
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center extend">
                                            <button 
                                                type="button" 
                                                className="btn1 btn btn-primary btn-lg px-4 gap-3"
                                            >
                                                READ MORE
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn2 btn btn-outline-secondary btn-lg px-4"
                                            >
                                                DONATE
                                            </button>
                                        </div>
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
            <div className='container statements'>
                <div className='row text-center p-5'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RadioButtonCheckedIcon className='icon' />
                        <h5>Our Mission</h5>
                        <h6>
                            Empowering communities to be healthy and self-reliant through provision 
                            of knowledge and skills
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <RemoveRedEyeIcon className='icon' />
                        <h5>Our Vision</h5>
                        <h6>
                            A healthy and self-reliant community that is empowered with knowledge 
                            and skills.
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 md-screen'>
                        <KeyIcon className='icon' />
                        <h5>Our Values</h5>
                        <h6>
                            Integrity, Commitment, Empowerment, Equality, Humanity
                        </h6>
                    </div>
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
                            Uganda has over 1.5 million refugees, of which over 80% are women and children
                        </h6>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h6>
                            <FormatQuoteIcon className='icon' />
                            86% of refugee secondary school students and 25% of primary school children in 
                            Uganda remain out-of-school.
                        </h6>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/Uty9UhkCcPg" 
                        title='medical mission' 
                        frameborder="0" 
                        allowfullscreen
                    ></iframe>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='pt-5'>Medical Mission 2023</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Alias dolorem nesciunt nisi. Harum aspernatur corporis at 
                            omnis laborum illo debitis iste vero, dolore quasi optio. 
                            Ullam architecto sunt nisi aut.
                        </p>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <h3 className='text-center pb-2'>Our Impact</h3>
                <div className='row text-center'>
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
                                5,000 child protection<br /> and GBV cases supported and referred and 1,500 
                                households received relief food items to survive.
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
            <div className='container py-5 partners'>
                <div className='text-center pb-5'>
                    <h3>Our Partners</h3>
                    <h5>Partneship for a better future</h5>
                </div>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <a href='https://medicalteams.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_aab09173c61443408691acc9aed64c4d~mv2.png/v1/fill/w_220,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MTI.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://piousprojects.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_ccf82770a43c4b65a2fc46d200bf00fe~mv2.png/v1/fill/w_220,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PIOUS%20America%20Project.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://mcc.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_203e8e22d1b54d72aea9ee5e408a5cc3~mv2.jpg/v1/fill/w_220,h_116,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/MCC.jpg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://refuaid.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_6a821ead40cf41418af1d88a3683ccc7~mv2.png/v1/fill/w_220,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/RefuAid.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://thealtenburgfoundation.com/our-work' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_68341a243efd49f0ac919ea5bd3f9a31~mv2.jpeg/v1/fill/w_214,h_74,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_68341a243efd49f0ac919ea5bd3f9a31~mv2.jpeg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.wvi.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_9fbc8888f498448f8b23355024bbabba~mv2.jpg/v1/fill/w_220,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WVUganda.jpg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.weltwaerts.de/en/home.html' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_515be626d4ca44ed81c2e9aebc3c8938~mv2.png/v1/fill/w_220,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/index.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.unhcr.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_b0346151c4ab454abb81b2eb44c868c9~mv2.jpg/v1/fill/w_197,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/UNHCR.jpg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.responseinnovationlab.com/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_0704aa3be29643a6ba25d4f04a4b0670~mv2.png/v1/fill/w_193,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Response%20Innovation%20lab.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.coburwas.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_a9c206005fca49c0affe1b6a1eb6f083~mv2.jpeg/v1/fill/w_125,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_a9c206005fca49c0affe1b6a1eb6f083~mv2.jpeg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://pumpkin-sailfish-jm9f.squarespace.com/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_c947ec7716744364bab4fa2023ab6e49~mv2.png/v1/fill/w_124,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Aid%20Pioneers.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.fundacionarnholddelacamara.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_26e4d32189ec4228a0b6d5107867006f~mv2.png/v1/fill/w_111,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Fundacion%20arnhold%20de%20la%20Camara.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.buildchurchafrica.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_ee7e1e40d4324fe38ceb457bc6fe5f26~mv2.jpeg/v1/fill/w_141,h_103,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-07-16%20at%2010_06_03.jpeg'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.nrc.no/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_618fb49c5fcf4974b042b2102489d147~mv2.png/v1/fill/w_118,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Navnl%C3%B8s.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <a href='https://www.warchildholland.org/' target='_blank' rel='noreferrer'>
                            <img 
                                src='https://static.wixstatic.com/media/d9e58e_eed5761e31294984875fdf91811f46ac~mv2.png/v1/fill/w_118,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WCH.png'
                                alt=''
                                width=''
                                height=''
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='section-bg people'>
                <h3 className='text-center pb-5'>what people are saying about our work</h3>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_64c5beded979464c9be5a150c5503cf9~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Alliance%20bilde.jpg'
                            alt=''
                            width='200'
                            height='200'
                            className=''
                        />
                        <div className=''>
                            <h6>Alliance Mwineza</h6>
                            <p>
                                P4T helped me with skills and knowledge needed in my life, 
                                from primary and now sponsored to secondary school.
                                I’m determined to be an accountant and advocate of girl child education
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_00e4374b83404e36a93f20bb4b647bbc~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/story%202a.jpg'
                            alt=''
                            width='200'
                            height='200'
                            className=''
                        />
                        <div className=''>
                            <h6>Bizimungu Shaban</h6>
                            <p>
                                Thanks to a new water wells project implemented by P4T with
                                funded by Mission of Hope, his family has plenty of clean water
                                to drink now.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_82460d1f056647b5aa17ef381390418e~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-04-28%20at%2018_44_edited.png'
                            alt=''
                            width='200'
                            height='200'
                            className=''
                        />
                        <div className=''>
                            <h6>Kemigisa Joyce</h6>
                            <p>
                                P4T changed my life, I don't have to beg from my neighbours anymore", 
                                said Kemigisa Joyce who was P4T Nursey and Primary school head teacher
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_684f50bb54c144548f18b033fac72072~mv2.jpeg/v1/fill/w_200,h_200,al_c,lg_1,q_80,enc_auto/WhatsApp%20Image%202022-04-29%20at%2016_44_25.jpeg'
                            alt=''
                            width='200'
                            height='200'
                            className=''
                        />
                        <div className=''>
                            <h6>Sifa</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Necessitatibus commodi velit dolor, explicabo vero iusto quo eum atque. 
                                Consequuntur ipsam, omnis unde temporibus quidem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
