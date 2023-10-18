import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './volunteer.scss';

const Volunteer = () => {
    return (
        <div>
            <Navbar />
            <div className='intro volunteer'>
                <div className='text-center intro-text'>
                    <h2>BE A VOLUNTEER WITH P4T</h2>
                    <h6>Join us and make a difference</h6>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Volunteer;
