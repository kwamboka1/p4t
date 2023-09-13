import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './contact.scss';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='team intro'>
                <div className='text-center intro-text'>
                    <h2>Contact Us</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Contact;
