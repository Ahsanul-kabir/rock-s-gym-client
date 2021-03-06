import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <main className='footer'>
            <section>
                <div>
                    <h2>ROCK'S <span style={{ color: "goldenrod" }}>GYM</span> </h2>
                </div>
                <div>
                    <p>Need Help?</p>
                    <p>Help Center</p>
                    <p>Email Support</p>
                    <p>Live Chat</p>
                    <p>Gift Certificates</p>
                    <p>Send Us Feedback</p>
                </div>
                <div>
                    <p>Digital Resources</p>
                    <p>Articles</p>
                    <p>E-books</p>
                </div>
                <div>
                    <p>Contact with Us</p>
                    <div className='socialMedia'>
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <br />
                    <p>HOTLINE: 01753652153</p>
                    <p>1001055 (Nayeem)</p>

                </div>
                <div>
                    <p>Join Our Newsletter</p>
                    <p>Get exclusive news, features and updates from The Shredder Weight Loss Academy.</p>
                </div>
                <div className="mobileFooter">
                    <p>Need Help?</p>
                    <p>Digital Resources</p>
                    <p>JOin Our Newsletter</p>
                </div>
            </section>
            <small>© {year}. All Rights Reserved</small>
        </main>
    );
};

export default Footer;