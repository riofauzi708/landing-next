import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaSms, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../assets/img/logo.png';
import '../assets/css/Animations.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbarLeft">
                <Image src={Logo} alt="Logo PT Cipta Pelangi" className="navbarLogo" width={40} height={40} />
                <span className="navbarCompanyName">PT Cipta Pelangi</span>
            </div>
            <div className="navbarRight">
                <div className="contactUs">
                    <button
                        className="contactUsButton"
                        onClick={toggleDropdown}
                        aria-expanded={dropdownOpen}
                        aria-controls="contact-dropdown"
                    >
                        Hubungi Kami <FaPhone />
                    </button>
                    {dropdownOpen && (
                        <div className="contactDropdown" id="contact-dropdown">
                            <a href="https://wa.me/NOMOR_WHATSAPP" className="contactButton" aria-label="WhatsApp">
                                <FaWhatsapp className="whatsappIcon" /> WhatsApp
                            </a>
                            <a href="mailto:EMAIL_ANDA" className="contactButton" aria-label="Email">
                                <FaEnvelope className="emailIcon" /> Email
                            </a>
                            <a href="sms:NOMOR_TELEPON" className="contactButton" aria-label="SMS">
                                <FaSms className="smsIcon" /> SMS
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
