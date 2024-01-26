import './footer.scss';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <footer className="py-5">
                    <div className="row">

                        <div class="col-6 col-md-2 mb-3">
                            <h6>Quick Links</h6>
                            <ul class="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Home</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">News</a></li>
                                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0">Contact Us</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Privacy Policy</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Terms & conditions</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-4 mb-3">
                            <p className='pt-3 flex-column'>
                                <strong>Planning for Tomorrow Youth Organisation</strong> is located in 
                                Block 1 Kyebitaka Village, Kasonga Parish, Kyangwali Refugee Settlement, 
                                Kikuube District. P.O. Box 249 Hoima, Uganda.
                            </p>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h6>Subscribe to our newsletter</h6>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                    <button className="btn btn-primary orange-btn subscribe-btn" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2023 P4T, Org. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li className="ms-3">
                                <TwitterIcon className='footer-icon'/>
                            </li>
                            <li className="ms-3">
                                <FacebookIcon className='footer-icon' />
                            </li>
                            <li className="ms-3">
                                <LinkedInIcon className='footer-icon' />
                            </li>
                            <li className="ms-3">
                                <InstagramIcon className='footer-icon' />
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
