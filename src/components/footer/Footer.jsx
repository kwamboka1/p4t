import './footer.scss';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>About us</h5>
                        <ul class="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Who we are</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our Board</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our Team</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our History</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>What we do</h5>
                        <ul class="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Education</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Livelihood</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Child Protection</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Health</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our Impact</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Quick Links</h5>
                        <ul class="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">News</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy Policy</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Terms & conditions</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary orange-btn" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 P4T, Org. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li className="ms-3">
                            <TwitterIcon />
                        </li>
                        <li className="ms-3">
                            <FacebookIcon />
                        </li>
                        <li className="ms-3">
                            <LinkedInIcon />
                        </li>
                        <li className="ms-3">
                            <InstagramIcon />
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
