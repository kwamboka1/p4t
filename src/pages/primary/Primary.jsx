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
                        The school is community-owned; started and led by refugees so that refugee 
                        children and vulnerable Ugandan children have access to quality education.
                        P4T is providing quality primary education for refugees and Ugandan infants 
                        from age 6 years to 17 years old. P4T Primary school started in 2016 the lower 
                        primary classes with only 30 children but today we educate over 500 children. 
                        On the 21st February 2018, P4T Primary School was licensed with the Ministry 
                        of Education and Sport with license number ME/P/9478. We believe in the power 
                        of education to prepare refugees for a brighter future. “Refugee children, 
                        future leaders”, says Bienvenu Byamungu, Co- founder and Global Director of P4T.
                    </p>
                    <p>
                        We have educated over 1200 children in primary education since 2015, have 
                        registered 44 finalists at the Uganda National Examinations Board and we 
                        prepare students to transition effectively into secondary school and have over 
                        571 children attending school our primary and ECD.
                    </p>
                    <p>
                        P4T Education is unique where all the children receive two meals a day to keep them 
                        in school. We have school computers that allows the children to acquire computer 
                        skills, access online studies. We also provide on-campus accommodation to primary 
                        six and candidate students and we hope to establish accommodation for orphaned, 
                        unaccompanied minors and other vulnerable children in order to access education.
                    </p>
                    <p>
                        P4T mission is to provide quality education to build a sustainable young 
                        generation with knowledge and skills.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Primary;
