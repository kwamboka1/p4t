import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './supportP4t.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const SupportP4t = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const toggleDropdown1 = () => {
        setShowDropdown1(!showDropdown1);
    };

    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    }

    const toggleDropdown3 = () => {
        setShowDropdown3(!showDropdown3);
    }

    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>SUPPORT OUR WORK</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    With over 1.4 million refugees, Uganda is the country with the third largest 
                    number of refugees in the world and the largest in Africa. The refugees come 
                    from some of the worst conflicts in the world. More than 60% are children. 
                    Most of these have fled brutal conflicts and have witnessed horrific violence 
                    or lost family and friends. The schools are overcrowded, which results in many 
                    not getting the education they are entitled to. At the same time, 25% of 
                    children of primary school age and 86% of young people of upper secondary 
                    school age have no schooling at all. (UNHCR 2020).
                </p>
                <p>
                    In Kyangwali refugee camp alone, there are 113,000 refugees, of whom 82% are women 
                    and children and over 50% of children are of school age. Only 17172 children went 
                    to school in 2018 (UNCHR 2018). Children have a long way to go to school, lack 
                    access to food and psychosocial assistance programs due to lack of financial 
                    opportunities, or dependence on the World Food Program where each family receives 
                    only 8 USD (approx. 65 kroner) per person per month for food.
                </p>
                <p>
                    P4T Uganda has achieved a lot with its work here, but there are many more who 
                    need help and assistance. Below you can read more about what we can achieve with 
                    your support.
                </p>
            </div>
            <div className='container p-5'>
                <h3 className='text-center'>OUR ACTIVITIES</h3>
                <div className='text-center'>
                    <p>
                        Here you can find out more about how you can make a difference in the lives of 
                        refugees. Your support is valuable, and only small amounts can have a big effect.
                    </p>
                    <p>
                        A monthly gift to us will be of great help with our work with children and 
                        families affected by war and conflict. By donating to P4TNorge every month, you 
                        will give refugees education, protection and job opportunities for a better future. 
                        As little as 50 kroner can make a big difference!
                    </p>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_18331f00d6824ce892cf94be5478de51~mv2.jpg/v1/crop/x_0,y_15,w_720,h_720/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Refugee%20children%20in%20Uganda%205.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h5>SPONSOR A CHILD</h5>
                        <h6>Help a child getting an education</h6>
                        <p>
                            It is estimated that 19% of refugee children at primary school level have 
                            a higher age than the school level would indicate. This is due to lack of 
                            schooling and language problems. 60% of primary school children in 
                            Kyangwali do not have access to education, have had to leave or have never 
                            started. Education is the key to giving girls and boys the knowledge and 
                            skills to live productive, fulfilling and independent lives.
                        </p>
                        <a href='/#'>
                            Read More <ArrowRightAltIcon />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_1da0f8aa18224800b55e0bea0aa3192b~mv2.jpg/v1/crop/x_302,y_0,w_694,h_694/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Support%20Refugee%20families%20in%20Uganda.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h5>SUPPORT A FAMILY</h5>
                        <h6>Give a family a better life</h6>
                        <p>
                            Due to a high level of illiteracy, extreme poverty, unemployment, and 
                            vulnerable people, P4T works to provide education and training to enable 
                            people in society to create their own jobs and better income opportunities.
                            Limited financial opportunities and dependence on the World Food Program 
                            where each person receives $ 8 (approximately 65 kroner) per month for 
                            food makes it difficult to have funds for other things a family needs.
                        </p>
                        <a href='/#'>
                            Read More <ArrowRightAltIcon />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_b6f58e6a00024b03aa31458dcd1281f6~mv2.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Barna%20p%C3%A5%20skolen%20under%20tre%20i%20Uganda.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h5>SUPPORT OUR SCHOOL</h5>
                        <h6>Support our nursery and school</h6>
                        <p>
                            The schools are overcrowded, which leads to many students dropping out. 
                            The student / teacher rate is as high as 1: 200 compared to the authorities' 
                            standard of 1:53. This leads to uncertain learning and a troubled environment.
                            Building good and safe classrooms means that more students will receive an 
                            education, and the chance of premature marriage and pregnancy as well as 
                            students dropping out is reduced. Not least, the teacher gets more time 
                            for the students when the class is smaller.
                        </p>
                        <a href='/#'>
                            Read More <ArrowRightAltIcon />
                        </a>
                    </div>
                    <div className='col-md-3'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_cd5bad2f65904e3a8a5c9a933b89cf6e~mv2.jpeg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pHOTO%201.jpeg" 
                            alt="" 
                            width='100%'
                        />
                        <h5>SUPPORT OUR PROTECTION OF CHILDREN</h5>
                        <h6>We want to make everyday life safer for children</h6>
                        <p>
                            Uganda is home to more than 1.4 million refugees and 60% of these are 
                            children, including many who have experienced sexual abuse, who have come 
                            alone or have escaped from their families in need of protection.
                            40% of girls in Uganda get married before the age of 18, and 10% of them 
                            before the age of 15. Around 35% of girls drop out of school because of 
                            this, while 23% drop out due to pregnancy.
                        </p>
                        <a href='/#'>
                            Read More <ArrowRightAltIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='border-left'>
                    <h5>BE A SPONSOR</h5>
                    <p>
                        Do you want to become a sponsor of one of our children in the Kyangwali Refugee 
                        Settlement? There are many children who need a little extra assistance and help, 
                        and not least follow-up from our skilled people.
                    </p>
                    <p>
                        By becoming a sponsor, you help not only the child but also the family and the 
                        surrounding community. Contact us if you want to contribute by becoming a sponsor, and 
                        feel free to tell us a little about yourself.
                    </p>
                    <p>
                        Below you can find answers to some questions you may have about becoming a sponsor.
                    </p>
                    <p>
                        We look forward to hearing from you! :)
                    </p>
                </div>
                <div className='pt-5'>
                    <h4 className=''>FREQUENTLY ASKED QUESTIONS</h4>
                    <p>
                        Here you can find the answers to the most common questions about sponsorship<br />
                        If you have other questions please contact us on e-mail
                    </p>
                    <hr />
                    <div className="dropdown">
                        <h6 className="upper-dropdown" onClick={toggleDropdown1}>
                            HOW IS MY SPONSORSHIP DONATION USED?
                            <KeyboardArrowDownIcon />
                        </h6>
                        {showDropdown1 && (
                            <>
                                <div className="lower-dropdown">
                                <p>
                                    Your donations are used to meet the greatest needs of your 
                                    sponsored child's community. It could be education, nourishing 
                                    food, medication, protection, psychosocial support or accommodation.
                                </p>
                                <p>
                                    By donating, you also help keep children safe while getting them 
                                    ready to participate in shaping their own future. To successfully 
                                    tackle child vulnerability, it’s important to deal with both 
                                    symptoms and cause.
                                </p>
                                <p>
                                    Your support is what enables us to overcome these barriers and 
                                    help children reach their God-given potential.
                                </p>
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                    <div className="dropdown">
                        <h6 className="upper-dropdown" onClick={toggleDropdown2}>
                            HOW DOES MY SPONSORED CHILD BENEFIT?
                            <KeyboardArrowDownIcon />
                        </h6>
                        {showDropdown2 && (
                            <>
                                <div className="lower-dropdown">
                                <p>
                                    Your sponsored child will experience a fuller, happier, healthier 
                                    and safer life.Regular monitoring lets us check their progress and 
                                    intervene appropriately when necessary.Your messages bring them 
                                    hope and happiness, and learning to read those messages increases 
                                    their skills and builds confidence.
                                </p>
                                <p>
                                    It’s not only their physical safety—we provide the safe, nurturing 
                                    space for them to explore, develop and grow spiritually. Their 
                                    hopes and dreams become a reality as they watch their community 
                                    transform into a healthier and safer place. Children are built to 
                                    become great leaders and change markers.
                                </p>
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                    <div className="dropdown">
                        <h6 className="upper-dropdown" onClick={toggleDropdown3}>
                            WHY SHOULD I SPONSOR A CHILD THROUGH P4T?
                            <KeyboardArrowDownIcon />
                        </h6>
                        {showDropdown3 && (
                            <>
                                <div className="lower-dropdown">
                                <p>
                                    Because together, we can make a real difference! If you're 
                                    considering sponsorship, you already want to help change lives. 
                                    Sponsorship makes it possible for you to give vulnerable children 
                                    fuller lives and better futures.
                                </p>
                                <p>
                                    You'll see the transformation for yourself through regular updates 
                                    while you build an enjoyable personal connection with a child who 
                                    needs you.
                                </p>
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                </div>
            </div>
            <Footer />            
        </div>
    )
};

export default SupportP4t;
