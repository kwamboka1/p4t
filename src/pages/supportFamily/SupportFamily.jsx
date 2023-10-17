import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './supportFamily.scss';

const SupportFamily = () => {
    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>SUPPORT A FAMILY</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    Due to a high level of illiteracy, extreme poverty, unemployment, and vulnerable 
                    people, P4T works to provide education and training to enable people in society 
                    to create their own jobs and better income opportunities.
                </p>
                <p>
                    Limited financial opportunities and dependence on the World Food Program where 
                    each person receives $ 6 per month for food makes it difficult to have funds for 
                    other things a family needs.
                </p>
                <p>
                    Over 80% of the refugees are out of work. The vast majority of those who had a 
                    job have now lost it due to the Covid-19 pandemic. 70% of the world's refugees 
                    live in countries where there are often strict restrictions on the right to work, 
                    and 66% of refugees live in countries with restricted movement, according to the 
                    UNHCR. See more here: https://tinyurl.com/ refugees
                </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_293cf83d32ec4974936f4ca99142e7d2~mv2.jpg/v1/fill/w_342,h_340,fp_0.45_0.26,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_293cf83d32ec4974936f4ca99142e7d2~mv2.jpg'
                            alt=''
                            width='100%'
                        />
                        <h6>LEARNING A VOCATION GIVES INDEPENDENCE</h6>
                        <p>
                            Giving a family the opportunity to support itself 
                            is an important part of our work
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_aa7e0612bf3e4060ad3731d155cc47d4~mv2.jpg/v1/fill/w_342,h_340,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_aa7e0612bf3e4060ad3731d155cc47d4~mv2.jpg'
                            alt=''
                            width='100%'
                        />
                        <h6>A SEWING MACHINE PROVIDES INCOME</h6>
                        <p>
                            When the woman in a family learns a profession, it becomes a good thing 
                            that the whole family enjoys.
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_402039f1831a47e69c00f3f02d72cc09~mv2.jpg/v1/fill/w_342,h_340,fp_0.47_0.34,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_402039f1831a47e69c00f3f02d72cc09~mv2.jpg'
                            alt=''
                            width='100%'
                        />
                        <h6>A SMALL SHOP FOR SELF-HELP</h6>
                        <p>
                            It gives all people a great joy to feel that they can improve their own 
                            and their family's lives by gaining knowledge.
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_b7f0b4bb528749fcbcce18ad7c5c6f29~mv2.jpg/v1/fill/w_342,h_340,fp_0.67_0.23,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_b7f0b4bb528749fcbcce18ad7c5c6f29~mv2.jpg'
                            alt=''
                            width='100%'
                        />
                        <h6>BUYING AND SELLING GIVES FOOD ON THE TABLE</h6>
                        <p>
                            Being able to sell on the market provides income for the family
                        </p>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <h5>This is how you can support independence and a better future for a family: Donate here</h5>
                <ul>
                    <li>
                        USD 25 covers a family's food needs for one month.
                    </li>
                    <li>
                        USD 150 can provide a job opportunity for a woman through the purchase of 
                        a sewing machine with accessories.
                    </li>
                    <li>
                        USD 100 covers vocational training and materials for 30 people as well as 
                        paying a teacher / lecturer
                    </li>
                    <li>
                        USD 50 provides a starter kit for a person to a small-scale business, which 
                        gives him or her financial opportunities to provide for his or her family.
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
};

export default SupportFamily;
