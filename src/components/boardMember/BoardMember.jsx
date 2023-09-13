import './boardMember.scss'
import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const BoardMember = ({ name, title, imageUrl, fbUrl, inUrl, mailUrl, description }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="board-member">
            <img src={imageUrl} alt={name} />
            <h5>{name}</h5>
            <h6>{title}</h6>
            <a href={fbUrl} target='_blank' rel='noreferrer'>
                <FacebookIcon className='icon'/>
            </a>
            <a href={inUrl} target='_blank' rel='noreferrer'>
                <LinkedInIcon className='icon'/>
            </a>
            <a href={mailUrl} target='_blank' rel='noreferrer'>
                <EmailIcon className='icon'/>
            </a>
            <br />
            <button onClick={togglePopup}>
                <ArrowRightAltIcon className='icon'/>
            </button>

            {isPopupOpen && (
                <div className="popup-background">
                    <div className="popup">
                        <button className='close-button' onClick={togglePopup}>
                            <CloseIcon className='icon'/>
                        </button>
                        <img src={imageUrl} alt={name} />
                        <h5>{name}</h5>
                        <h6>{title}</h6>
                        <div className='scrollable-description'>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoardMember;
