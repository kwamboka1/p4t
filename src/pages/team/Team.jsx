import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './team.scss';
import React from 'react';
import TeamMember from '../../components/teamMember/TeamMember';
import teamMembers from '../../data/teamMembers';

const Team = () => {
    return (
        <div>
            <Navbar />
            <div className='team intro'>
                <div className='text-center intro-text'>
                    <h2>Our Team</h2>
                    <h6>
                        We have a selfless dedicated team of young professionals from all 
                        walks of life including women, men, refugees and nationals.
                    </h6>
                </div>
            </div>
            <div className='section-bg2 p-5'>
                <div className='container team-members'>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            title={member.title}
                            imageUrl={member.imageUrl}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Team;