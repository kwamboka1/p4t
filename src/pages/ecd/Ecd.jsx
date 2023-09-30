import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './ecd.scss';

const ECD = () => {
    return (
        <div>
            <Navbar />
            <div className='ecd intro'>
                <div className='text-center intro-text'>
                    <h2>Early Childhood Development (ECD)/<br /> Pre-Primary Education.</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <div className='row'>
                    <div className='col-md-6'>
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/dABYR1pY1gE?si=Mgzz1ENGh9moCEtw" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className='pt-2'
                        ></iframe>
                    </div>
                    <div className='col-md-6'>
                        <p>
                            Early Childhood Development (ECD) is an investment for life. 90 percent of 
                            brain development takes place before a child’s fifth birthday, and children 
                            who participate in ECD get a head start in their emotional and cognitive 
                            development, are more likely to do well in school and become productive 
                            adults. ECD is however not accessible by more than two-third of children in 
                            Uganda and especially those in refugee settlements.
                        </p>
                        <p>
                            We aim to ensure that underprivileged girls and boys aged 2-6 years have 
                            access to holistic and inclusive Early Childhood Development which is a 
                            very important foundation for mental, social, and spiritual development of 
                            a child in the early ages of their life, lack of which can lead to late 
                            start in joining school, retardation in learning and antisocial behaviors. 
                            P4T started providing quality ECD in 2015 for refugees and Ugandan infants. 
                            Each year, we conduct graduation ceremony for children completing Early 
                            Childhood Development (ECD)/pre-school education and prepare them to join 
                            primary education.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ECD;
