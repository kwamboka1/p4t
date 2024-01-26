import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './primary.scss';

const Primary = () => {
    return (
        <div>
            <Navbar />
            <div className='primary intro'>
                <div className='text-center intro-text'>
                    <h2>Primary Education.</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <p>
                        The importance of primary education in Uganda cannot be underscored. A big number of pupils in Uganda drop 
                        out of school at this stage. Primary school education is the only basic education that such pupils can, in 
                        most cases, ever be exposed to. Basic education means the minimum package of learning, which every individual 
                        must receive to live as a good and useful citizen in society.
                    </p>
                    <p>
                        Uganda welcomes many refugees from different countries yet Uganda has no infrastructure to respond positively 
                        to the basic needs of refugees. Refugee children are highly affected by this because they have no money to pay 
                        for primary education. The government primary schools are very few to accommodate both refugee children and the 
                        nationals. These schools are far from the places where refugees live and can only take very few refugee children.
                    </p>
                    <p>
                        The best protection to refugee children is to ensure that they are in schools and this also helps them to develop 
                        and be good people important to the community and their countries.
                    </p>
                    <p>
                        P4T has been running a primary education program for refugees and national children from 7 years to 18 years in 
                        Kyangwali Refugee Settlement since 2016. P4T Primary school started in 2016 with the lower primary classes with 
                        an enrolment of 30 children but today we support <strong>423 (218 girls and 205 boys) children</strong> from 
                        primary one to primary seven.
                    </p>
                    <p>
                        ​We have educated over 1200 children in primary education since 2015, registering 44 finalists at the Primary 
                        Leaving Examinations (PLE) with Uganda National Examinations Board (UNEB) who have passed to transition effectively 
                        into secondary school.
                    </p>
                    <p>
                        P4T’s primary education mission is to provide quality education to build a sustainable young generation with 
                        knowledge and skills.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Primary;
