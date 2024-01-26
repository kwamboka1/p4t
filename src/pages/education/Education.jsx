import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './education.scss';
import Educ from '../../assets/p4t-pupils.jpeg';
import Ecd from '../../assets/ecd3.jpeg';
import Sec from '../../assets/secondary.jpeg';
import FEED from '../../assets/feeding.jpeg';
import TECH from '../../assets/comp2.jpeg';
import SCH from '../../assets/secondary3.jpeg';

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
            <div className='section-bg'>
                <div className='container p-4'>
                    <h3>Providing quality education to build a sustainable young generation with knowledge and skills.</h3>
                    <p>
                        The right to education is universally accepted as a fundamental constituent of human rights. 
                        It facilitates the economic and social empowerment of marginalised and vulnerable groups, thereby 
                        improving their quality of life (Global Education Review, 2018). Refugees require education in order 
                        for them to enjoy other human rights which are conferred upon them. Typically, refugees enjoy low 
                        standards of living in conditions which are detrimental to their health. Education's importance lies 
                        in the fact that it allows them to escape conditions of poverty. In addition to poverty, refugees 
                        often encounter the challenge of the host population's hostility towards them that typically stems 
                        from the belief that refugees drain public resources and are, therefore, an economic liability. 
                    </p>
                    <p>
                        Education can assist in challenging these beliefs by enabling refugees to contribute positively to 
                        the host country's economy. Accordingly, education has the potential to reduce the level of hostility 
                        that refugees face from host populations.
                    </p>
                    <p>
                        Uganda is home to 1.5 million refugees, of which 60% are children, forced to flee from conflict and 
                        war in the Democratic Republic of Congo, South Sudan, Burundi, Somalia, and Rwanda leaving behind 
                        their homes, livelihoods, and education. Schools are often dangerously overcrowded by over 200 
                        children per class attended to by one teacher and lack basic resources, lack feeding, children walk 
                        long distances to school, lack psychosocial support and living in extreme poverty only depending on 
                        World Food Programme cash ration support of only $4 USD per head in the family monthly for food and 
                        other requirements, leaving education as a luxury in most refugee homes.
                    </p>
                    <p>
                        Education is the foundation of a child’s future, yet millions of children in Uganda – especially in 
                        the poorest areas – are being left behind. 
                    </p>
                    <p>
                        P4T provides ECD, Primary and Secondary education to refugees and the host community through our P4T 
                        Nursery and Primary School and P4T Secondary School.
                    </p>
                </div>
            </div>
            <div className='container py-5'>
                <div className='education-grid py-4'>
                    <div className='text-center'>
                        <a href="/ecd">
                            <h6>ECD</h6>
                            <img 
                                src={Ecd}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/primary">
                            <h6>PRIMARY</h6>
                            <img 
                                src={Educ}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SECONDARY</h6>
                            <img 
                                src={Sec}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SCHOOL FEEDING</h6>
                            <img 
                                src={FEED}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>TECHNOLOGY & INNOVATION</h6>
                            <img 
                                src={TECH}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>CO-CURRICULAR</h6>
                            <img 
                                src={Educ}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="/#">
                            <h6>SCHOLARSHIPS</h6>
                            <img 
                                src={SCH}
                                alt=""
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
