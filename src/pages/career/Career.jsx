import './career.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer;

const Career = () => {
    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>JOIN OUR TEAM</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    Planning for Tomorrow (P4T) is a volunteer-based, non-profit organization started 
                    by refugee youth in November 2007 in Kyangwali refugee settlement, Kikuube 
                    district, Uganda. It was legally registered in 2013 with Registration number 
                    CD/WG/0199/13 and Incorporated with URSB Registration No: 8002002652537 and it 
                    was registered in Norway with Registration No: 926 924 826.
                </p>
                <p>
                    P4T works in four thematic areas of Education, Health, Livelihood, and Community 
                    Service and Protection. P4T’s mission is to empower communities to be healthy and 
                    self-reliant through provision of knowledge and skills. P4T is located in Kasonga Centre, kyangwali Refugee settlement in Kikuube District Uganda.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default Career;
