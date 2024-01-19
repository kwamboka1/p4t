import './teamMember.scss'
import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';

const TeamMember = ({ name, title, imageUrl, description }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="team-member">
            <img 
                src={imageUrl} 
                alt={name}
                width=''
                height=''
                onClick={togglePopup}
            />
            <h5 onClick={togglePopup}>{name}</h5>
            <h6 onClick={togglePopup}>{title}</h6>
            {/* <div className='text-center'>
                <button onClick={togglePopup}>
                    Read More<ArrowRightAltIcon />
                </button>
            </div> */}

            {isPopupOpen && (
                <div className="popup">
                    <h6 className=''>{name}</h6>
                    <p>{description}</p>
                    <button onClick={togglePopup}>
                        <CloseIcon />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TeamMember;
