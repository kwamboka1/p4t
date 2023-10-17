import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './protectChild.scss';

const ProtectChild = () => {
    return (
        <div>
            <Navbar />
            <div className='intro'>
                <div className='text-center intro-text'>
                    <h2>HELP US PROTECT CHILDREN</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <p>
                    DID YOU KNOW? Child marriage is a clear violation of the rights of girls and 
                    women. Girls who get married early have the greatest risk of dropping out of 
                    school, being exposed to violence, getting HIV / AIDS, and dying from 
                    complications during pregnancy and childbirth. According to a survey from 2018; 
                    Violence against children survey, 94% of the girls and 86% of the boys who have 
                    experienced physical violence in Uganda, first suffered from this from a teacher.
                </p>
                <h6>
                    So what can be done about this? How can P4T help make life safer for children?
                </h6>
                <p>
                    Our projects aim to ensure that children have a safe and secure place where they can 
                    learn. This includes training child protection groups, teachers and others to identify, 
                    investigate and respond to protection issues and strengthen reporting routines. 
                    In addition, social workers will be trained in psychosocial support for those children 
                    who are struggling to learn due to the traumas they have gone through.
                </p>
                <p>
                    We want to provide 100 mobile phones (Child Aid Phones) to social workers, child 
                    protection groups, schools and police stations as a measure to support their work 
                    in reporting violence and child abuse to relevant institutions and leaders in the 
                    local community. This means that you no longer have to walk long distances to 
                    report incidents and call for help when needed. In such cases, it is essential to 
                    call the police and a doctor (where necessary) as soon as possible in order to be 
                    able to take measures and get the child away from a dangerous situation or a 
                    dangerous environment.
                </p>
                <p>
                    Another measure we will introduce is school clubs with their own management team 
                    that will strengthen girls and boys through knowledge and skills in children's 
                    rights. In this work, we will distribute tablets to schools to provide children 
                    with better learning methods, and in addition provide them with valuable 
                    knowledge about the use of digital aids. The tablets will be used in subjects 
                    such as English, Mathematics, Social Studies, Science and learning about 
                    children's rights. Not only does this make learning better, but the children gain 
                    a lot of extra knowledge about their own rights and will strengthen reading 
                    skills and math skills.
                </p>
                <p>
                    In this work, we will collaborate with other voluntary organizations, 
                    stakeholders and experts in child protection to provide education and materials 
                    that ensure that children are safe, happy and live good lives. We want to go from 
                    traditional beliefs to modern ways of protecting children. Reducing the risk of 
                    various forms of abuse such as child labor, oppression, violence, child marriage, 
                    lack of food, punishment, lack of education and health care is the most important 
                    thing we can do to give children a better chance of having a good, productive and 
                    satisfying life.
                </p>
            </div>
            <div className='container py-5'>
                <h5 className='text-center pb-2'>Together we build children's lives and shape their future.</h5>
                <div className='row'>
                    <div className='col-md-4'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_1c22537d864b4af7b2ed1bc2eccbc742~mv2.jpg/v1/fill/w_454,h_380,fp_0.22_0.35,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_1c22537d864b4af7b2ed1bc2eccbc742~mv2.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h6>GOOD NUTRITION IS IMPORTANT FOR CHILDREN'S LEARNING</h6>
                    </div>
                    <div className='col-md-4'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_6854bb01e7ff406ba10f6e7bec5d3915~mv2.jpg/v1/fill/w_456,h_380,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_6854bb01e7ff406ba10f6e7bec5d3915~mv2.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h6>KNOWLEDGE AND TRAINING IN CHILDREN'S RIGHT TO PROTECTION</h6>
                    </div>
                    <div className='col-md-4'>
                        <img 
                            src="https://static.wixstatic.com/media/d9e58e_8b1fad226a9247c0b333fdbe3acf3cd3~mv2.jpg/v1/fill/w_456,h_380,fp_0.76_0.45,q_80,usm_0.66_1.00_0.01,enc_auto/d9e58e_8b1fad226a9247c0b333fdbe3acf3cd3~mv2.jpg" 
                            alt="" 
                            width='100%'
                        />
                        <h6>SAFE PLACES AND SAFE ADULTS GIVE CHILDREN THE OPPORTUNITY TO DEVELOP</h6>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div>
                    <h5>HELP US TO PROTECT CHILDREN</h5>
                    <p>
                        Support our work with a money donation or why not with a mobile phone, tablet 
                        or become a partner - your help reduces the challenges girls and boys in 
                        Uganda face. You help to ensure that all children have the same rights to 
                        grow up with good health, with education and in safety.
                    </p>
                    <h6>You can contribute by donating any amount you can. Donate here</h6>
                    <ul>
                        <li>
                            USD 25 can buy a mobile phone with a SIM card that can be used as Child 
                            Aid telephones to contact the police for help and report all cases 
                            concerning child abuse.
                        </li>
                        <li>
                            USD 40 can protect 100 children every month from violence through 
                            knowledge and training in childrens rights.
                        </li>
                        <li>
                            USD 80 ensures that volunteers can offer training in child protection and 
                            how to treat such cases, use of medication and training in psychosocial 
                            support.
                        </li>
                        <li>
                            USD 110 can buy a bicycle that P4T gives to the child protection committees.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ProtectChild;
