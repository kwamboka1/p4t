import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './education.scss';
import Educ from '../../assets/p4t-pupils.jpeg';

const Education = () => {
    return (
        <div>
            <Navbar />
            <div className='education intro'>
                <div className='text-center intro-text'>
                    <h2>Education</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='container py-4'>
                <h3>Providing quality education to build a sustainable young generation with knowledge and skills.</h3>
                <p>
                    Education is a basic human right that should be afforded to all .Education may not 
                    be denied to any child, including in the circumstances that make him or her a 
                    refugee. Uganda is home to 1.5 million refugees, which 60% are children, forced to 
                    flee from conflict and war in the Democratic Republic of Congo, South Sudan, 
                    Burundi, Somalia, and Rwanda leaving behind their homes, livelihoods, and education.
                    Schools are often dangerously overcrowded by over 200 children per class attended 
                    to by one teacher and lack basic resources, lack feeding, children walk long 
                    distances to school, lack of psychosocial support and living in extremely poverty 
                    only dependency on World Food Programme with only $6 USD per head in the family 
                    monthly for food and As a result, the quality of learning is often poor.
                </p>
                <p>
                    Education is the foundation of a child’s future, yet millions of children in Uganda 
                    – especially in the poorest areas – are being left behind. We aim to ensure 
                    children have a quality learning environment by providing refresh training for 
                    teachers and education officials; pay school staff’s salaries, working with 
                    communities to increase parental engagement; building infrastructure such as 
                    classrooms, libraries and latrines; and providing school furniture such as desks, 
                    chairs, provide scholastic and teaching materials and provision of sanitation and 
                    hygiene facilities.
                </p>
            </div>
            <div className='section-bg'>
                <div className='education-grid'>
                    <div className='text-center'>
                        <a href="/ecd">
                            <h6>ECD</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/primary">
                            <h6>PRIMARY</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SECONDARY</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SCHOOL FEEDING</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>TECHNOLOGY & INNOVATION</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>CO-CURRICULAR</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SCHOLARSHIPS</h6>
                            <img 
                                src={Educ}
                                alt=""
                                width='300'
                                height='250'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Education;
