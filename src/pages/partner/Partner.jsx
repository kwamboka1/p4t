import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './partner.scss';

const Partner = () => {
    return (
        <div>
            <Navbar />
            <div className='intro partner'>
                <div className='text-center intro-text'>
                    <h2>PARTNER WITH US</h2>
                    <h6>
                        Let us help the helpless.  Make the world a better place through partnership.
                    </h6>
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    At Planning for Tomorrow (P4T), we know that partners are essential to be able 
                    to effectively focus on finding lasting and innovative solutions to the problems 
                    that refugees and other disadvantaged groups experience on a daily basis.
                </p>
                <p>
                    In order to be able to achieve and fulfill the UN's sustainability goals, 
                    cooperation and partners are needed across all sectors, and not least between 
                    organizations and the business community. We believe that joint and sustainable 
                    cooperation is necessary to prevent and respond to violence against children, to 
                    provide quality education and financial independence in Uganda.
                </p>
                <p>
                    In Norway we are determined to provide a basis for better integration and promote 
                    friendship between Norwegians and new immigrants to the country. We are looking 
                    for partners where we can work together to develop good and sustainable arenas 
                    for interpersonal relationships and knowledge.
                </p>
                <p>
                    With a special focus on "Goal 17: Cooperation to achieve the goals", we want to 
                    create cooperation that results in a sustainable future for children and families.
                </p>
                <p>
                    We welcome partners including foundations and humanitarian organizations to get 
                    in touch and bring their unique knowledge, capacity and donations that can help 
                    us achieve our goals to improve lives for vulnerable people in Uganda and in 
                    Norway.
                </p>
                <h6>
                    We are HUMANITARIANS and we have the INTEGRITY to put all donations to its 
                    intended use and ensure that all donations goes directly to communities in need 
                    and creating everlasting impact together through our partnerships.
                </h6>
                <h6>
                    If you want to know more about partner opportunities, or to partner with us, 
                    please send us an e-mail or call us at phone number +256775006144 or 
                    +256703655805
                </h6>
            </div>
            <Footer />         
        </div>
    )
};

export default Partner;
