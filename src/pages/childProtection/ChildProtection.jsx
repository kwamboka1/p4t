import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './childProtection.scss';

const ChildProtection = () => {
    return (
        <div>
            <Navbar />
            <div className='childProtection intro'>
                <div className='text-center intro-text'>
                    <h2>Child Protection</h2>
                    {/* <h6></h6> */}
                </div>
            </div>
            <div className='section-bg'>
                <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/r2oF737yXDo" 
                    title="P4T works towards protecting children by creating safe places for them to learn and play" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
                <h4>
                    We work towards creating a safe environment for children free from violence 
                    and abuse as well as preventing and responding to violence against children.
                </h4>
                <p>
                    Uganda is home to almost 1.5 million refugees, 60% of whom are children. The vast 
                    majority have fled brutal conflicts, and many have witnessed terrible violence and 
                    lost family and friends.
                </p>
                <p>
                    Children are particularly vulnerable to exploitation and abuse, such as forced 
                    labour, oppression, rape, being denied food as punishment, lack of education and 
                    health care, punishment and torture, etc.
                </p>
                <p>
                    Our protection programmes aim to ensure that children have a safe and secure place 
                    where they can learn and develop. This involves training Child Protection 
                    Committees (CPCs), teachers and others in the community to identify, report and 
                    respond to protection issues as well as strengthen existing reporting practices.
                </p>
                <p>
                    P4T runs a child protection program that aims to stop all child abuse in the local 
                    community, provide psychosocial support to those children who are struggling to go 
                    to school and learn as a result of trauma they have been exposed to.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default ChildProtection;
