import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
             heading="Get in touch."
             details="Drop me an email!"
             />

<div className='contact-form-container'>
                <form className='contact-form'
                action="https://formspree.io/f/xbjqbagr"
                method="POST"
                >
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

<div className='social-icons-container'>
                <a href='https://github.com/pbtrad' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/paul-browne-8951a342/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://www.instagram.com/paulbrowne2/'
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>
                
                
            </div>

        </div>
    );
};

export default Contact;