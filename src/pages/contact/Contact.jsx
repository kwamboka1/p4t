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
                    {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6> */}
                </div>
            </div>
            <div className="" id="section-map">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="Kyangwali map"
                            width="100%" 
                            height="400" 
                            id="gmap_canvas" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9660163820595!2d30.778796069515465!3d1.1843117961619194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176465d134a0201d%3A0x1d1df227c9710226!2sPlanning%20for%20Tomorrow%20Youth%20Organisation!5e0!3m2!1sen!2sus!4v1694684386141!5m2!1sen!2sus" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0">
                        </iframe><br/>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='contact container'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h3>Get in touch with us...</h3>
                            <h4>Planning for Tomorrow (P4T)</h4>
                            <p>Kyangwali Refugee Settlement, Kikuube District</p>
                            <p>P.O. BOX 294, HOIMA UGANDA</p>
                            <p>Office: +256 392 001374</p>
                            <p>Mob: +256 775 006144 | +256703655805 | +4746594912</p>
                            <p>Email: contact@p4tglobal.org</p>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <form action='' method='post'>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                className="form-control p-2" 
                                                placeholder="Enter your Name" 
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                className="form-control p-2" 
                                                placeholder="Enter your Email" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col pt-2">
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        className="form-control p-2" 
                                        placeholder="Subject" 
                                    />
                                </div>
                                <div className="col py-2">
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        cols="10" 
                                        rows="5" 
                                        className="form-control" 
                                        placeholder="Type your Message"
                                    >
                                    </textarea>
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        className="btn btn-primary btn-lg fw-bold" 
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Contact;
