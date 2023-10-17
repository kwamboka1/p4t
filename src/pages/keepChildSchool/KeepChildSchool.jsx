import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './keepChildSchool.scss';

const KeepChildSchool = () => {
    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>KEEP A CHILD IN SCHOOL</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    More than 5 million Ugandan school-age children have left primary school before 
                    7th grade. Only 5% of children with disabilities have access to education. 
                    For millions of children in Uganda, a quality education is unattainable due to 
                    tuition fees or the lack of a school nearby. This easily leads to a vicious 
                    circle of poverty and deprives them of the opportunity to have good lives. 
                    YOU can change this. By supporting a child or becoming a sponsor, you can ensure 
                    that a child gets the pleasure of a good education and the chance to reach his or 
                    her full potential.
                </p>
                <p>
                    "I wish my parents were alive so they could pay for my education. Then I would 
                    have gone to school and had the life I dream of. I have had to drop out of school 
                    and now know that I want to get married and have children that I cannot send to 
                    school because I want to be poor. This is not what I wanted ”(Girl, 13 years old 
                    from Congo, orphaned and dropped out of school. Kyangwali, Uganda).
                </p>
                <p>
                    Refugee children are 5 times more likely to drop out of school than other 
                    children. Supporting a child means giving them new hope for a better future.
                </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img
                            src='https://static.wixstatic.com/media/d9e58e_75227a8f5a6841cf82304a063ac85366~mv2.jpg/v1/fill/w_273,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-05-14%20at%2015_24_edited.jpg'
                            alt=''
                            width='100%' 
                        />
                        <h6>STUDENTS DOING THEIR HOMEWORK</h6>
                        <p>
                            With your help, more children can have the opportunity to go to school
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img
                            src='https://static.wixstatic.com/media/d9e58e_b1a2adc861314b758749e381e54c0769~mv2.jpeg/v1/fill/w_397,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-05-14%20at%2014_31_27.jpeg'
                            alt=''
                            width='100%' 
                        />
                        <h6>PLAY AND FUN ARE ALSO LEARNING</h6>
                        <p>
                            Children develop best in a safe environment where there is room for both 
                            play and learning
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img
                            src='https://static.wixstatic.com/media/d9e58e_a0f8d5cf0d5c4507acf0bd9da0810eb8~mv2.jpg/v1/fill/w_338,h_251,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/We%20feed%20children.jpg'
                            alt=''
                            width='100%' 
                        />
                        <h6>TWO MEALS A DAY, BREAKFAST AND LUNCH</h6>
                        <p>
                            The children gets more energy and consentrate better when they are not hungry
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img
                            src='https://static.wixstatic.com/media/d9e58e_19d0c3f57c5d4a4a9f20c0d4fc331232~mv2.jpeg/v1/fill/w_261,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-04-30%20at%2018_07_23.jpeg'
                            alt=''
                            width='100%' 
                        />
                        <h6>GIRLS NEED EDUCAION FOR A BETTER FUTURE</h6>
                        <p>
                            40% of girls in Uganda get married before the age of 18, help us to keep children 
                            stay in school
                        </p>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <h5>
                    Help a child regain hope for a better future through your support. 
                    Help us and donate today. Donate here
                </h5>
                <ul>
                    <li>
                        USD 150 covers school fees, uniform, scholastic material at the P4T 
                        primary school for a year
                    </li>
                    <li>
                        USD 200 covers school fees, uniform, scholastic material at secondary school for a year.
                    </li>
                    <li>
                        USD 50 covers feeding and medical for a year.
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
};

export default KeepChildSchool;
