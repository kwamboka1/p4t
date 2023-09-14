import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './livelihood.scss';

const Livelihood = () => {
    return (
        <div>
            <Navbar />
            <div className='livelihood intro'>
                <div className='text-center intro-text'>
                    <h2>Livelihood</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <iframe
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/Zg7s6b-u41s" 
                    title="VST Trainees progression" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
                <h4>
                    Creating a self-reliant community
                </h4>
                <p>
                    Most refugees in Uganda live below the poverty line and with great uncertainty 
                    about whether their food needs can be met. They are completely dependent from the 
                    World Food Program (WFP). Refugees receive USD 6 (approx. NOK 50) per person in 
                    food allowance each month.
                </p>
                <p>
                    The biggest problem for many refugees is a lack of knowledge and skills, high rate 
                    of unemployment, lack of start-up capital and land to start or expand economic 
                    opportunities to make a decent living.
                </p>
                <p>
                    P4T has the vision of creating a self-reliant community and this is done through 
                    the intervention of building livelihood opportunities for the local communities 
                    to create their own jobs instead of seeking job or dependence .
                </p>
                <p>
                    When parents live in poverty, their children suffer. Without a source of income, 
                    they are unable to provide vital pay school fees, medicine, food, and Clothing. 
                    We help refugees and host community escape the cycle of poverty, through a range 
                    of vocational skills training in tailoring machines, carpentry, computer, bakery, 
                    hair dressing, craft work, soap making. Financial and entrepreneurial skills is 
                    also taught, and we equip them with the skills they need to earn a sustainable 
                    income.
                </p>
                <p>
                    We support and encourage community savings and loans groups to invest for the 
                    future and set up small businesses. With your support, we strive to empower 
                    refugees to build strong social and economic community, and to strengthen their 
                    capacity to lead independent and fulfilling lives.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default Livelihood;
