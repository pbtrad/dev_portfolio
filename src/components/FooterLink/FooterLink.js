import React from 'react';
import './FooterLink.css';

const FooterLink = ({ phrase, link, toAdress }) => {
    return (
        <div className='footer-link'>
            {phrase}
            <a href={toAdress} className='footer-link-element'>
                {link}
            </a>
        </div>
    );
};

export default FooterLink;