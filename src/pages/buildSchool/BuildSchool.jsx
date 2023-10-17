import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './buildSchool.scss';

const BuildSchool = () => {
    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>HELP US BUILD A SCHOOL</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default BuildSchool;
