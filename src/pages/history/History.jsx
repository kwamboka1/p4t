import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './history.scss';

const History = () => {
    return (
        <div>
            <Navbar />
            <div className='history intro'>
                <div className='text-center intro-text'>
                    <h2>Our History</h2>
                    <h6>Learn about our background and how P4T was founded</h6>
                </div>
            </div>
            <div className='section-bg'>
                <div className='container'>
                    <div className='p4t-history text-center'> 
                        <img 
                            src='https://static.wixstatic.com/media/d9e58e_39acdbf6606e4906ae5361a07b0e075a~mv2.jpg/v1/fill/w_819,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kyangwali%20Refugee%20Camp%2C%20P4T%20History.jpg'
                            alt=''
                            className='pb-5'
                        />
                        <p className='px-5'>
                            <strong>Planning for Tomorrow (P4T)</strong> is a humanitarian voluntary 
                            organization started by Bienvenu Byamungu together with other refugees in Uganda 
                            in 2007, and gained public status in 2013 with registration number 
                            CD / WG / 0199/13 with a vision to build a healthy and self-reliant community that 
                            is empowered with knowledge and skills. The founders came as refugees to Kyangwali 
                            from the Congo (DRC), South Sudan, Rwanda, Kenya and Burundi, along with thousands 
                            of others fleeing war, violence, famine and other problems that have resulted in 
                            conflicts in their homeland since 1996.
                        </p>
                        <p className='px-5'>
                            In 2021, P4T was fully registered in Norway with Registration number 
                            926 924 826 with the main purpose to fundraise and raise resources needed 
                            to support P4T's projects in Uganda and also to promote multicultural 
                            diversity in Norway by promoting Integration and intercultural dialogue 
                            and work with a diverse and inclusive society.
                        </p>
                        <p className='px-5'>
                            In 2007, after 10 years as a refugee, we lost hope of ever returning to 
                            our homelands. The loss of this hope nevertheless ended up in something 
                            good when it led to us forming Planning for Tomorrow. After being 
                            unproductive and dependent on others, living in poverty with no income, 
                            little food, lack of education and otherwise a difficult life with a low 
                            standard of living, we decided to make Kyangwali in Uganda our home and 
                            try to improve our lives. society. The start-up began as an association 
                            in 2007 and is now an internationally recognized organization. We gathered 
                            a group of girls and women who learned to sew and design tablecloths and 
                            other crafts as a source of income for their families. This meant a big 
                            change for 50 households / families.
                        </p>
                        <p className='px-5'>
                            In 2010, we decided to increase our efforts and our activities. We saw 
                            that the community around us was still facing many difficulties and 
                            therefore we started a mobilization to enable the environment around us to 
                            help themselves. The campaign was about finding out how much the community 
                            itself could do without help that we did not have in our immediate 
                            environment at the time. We talked to everyone we could about humanism and 
                            volunteering and we managed to get volunteers in who cleared roads, 
                            cleaned unprotected water resources, set up housing and toilets for the 
                            extremely vulnerable groups. This included orphans, the disabled, widows, 
                            mothers and the sick and elderly. This large group of volunteer 
                            hardworking people affected the lives of very many during these years 
                            and received great local attention.
                        </p>
                        <p className='px-5'>
                            In 2015, we started a partnership with World Vision Uganda and set up 41 
                            latrines adapted for the disabled in the Kyangwali Refugee Settlement. 
                            In May of that year, we decided to do something that seemed impossible. 
                            Given that the children in the area lacked access to good education, 
                            we started an Early Childhood Development Center (TBS) in a room in our 
                            office. We started with 26 children, at kindergarten and primary school 
                            level with 2 caregivers / teachers. Today we have a school with 10 classes 
                            (3 TBS, 7 at primary school level) with a total of over 600 orphaned and 
                            vulnerable refugee children as well as Ugandan toddlers from 3 to 17 years 
                            of age. They get a hot meal as well as medication they need at school. 
                            P4T kindergarten and primary school also provides work for 20 teachers and 
                            other employees. Without any guaranteed income, we have done the best we 
                            can with temporary funds, and have both qualified and unqualified teachers 
                            to give the children what they need.
                        </p>
                        <p className='px-5'>
                            In the same year (2015), P4T was awarded funding from the US Embassy in 
                            Kampala through the PEPFAR program to implement a "Living Positive" 
                            project for children affected by / living with HIV and orphans. 
                            This project provided for the social and economic strengthening of 81 
                            households with orphaned and vulnerable children who were affected by / or 
                            had HIV. The project supported these 81 households from 15 October 2015 to 
                            14 September 2016, and positively affected the lives of over 400 people 
                            through skills training, agricultural training and starter kits for 
                            carpenters, tailors, small-scale bakeries and sewing kits, etc.
                        </p>
                        <p className='px-5'>
                            In February 2018, P4T Kindergarten and primary school was publicly 
                            approved by the Ministry of Education and Sports with registration number 
                            ME / P / 9478.
                        </p>
                        <p className='px-5'>
                            We believe in the power of educating children to prepare refugee children 
                            for a better future that eradicates poverty in the society in which they 
                            live. "Refugee children are tomorrow's leaders," says Bienvenu, P4T's 
                            director.
                        </p>
                        <p className='px-5'>
                            P4T started with voluntary counseling and testing in the Kyangwali Refugee 
                            Settlement and the community at large. In the so-called 90 90 90 
                            HIV / AIDS strategy, we focused on the first 90 by ensuring that 90% of 
                            the population was tested to find out about their condition. We created 
                            awareness and enlightened the population through training and workshops. 
                            We used music, dance, drama, drawing and painting about HIV / AIDS and 
                            gender-based violence, and also offered sports activities such as football 
                            competitions for women as part of empowering women. All of these activities 
                            were intended to combat ignorance, misunderstandings, stigma, ruthlessness, 
                            negative behavior and hopelessness.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default History;
