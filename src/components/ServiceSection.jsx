import React from 'react';
import '../assets/css/ServiceSection.css';
import Layanan from '../assets/img/layanan.jpg';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope, FaSms } from 'react-icons/fa';

const ServiceSection = () => (
    <section className="service-section">
        <h2>Layanan Profesional Kami</h2>
        <p>Dengan tim ahli kami, kesuksesan digital Anda adalah jaminan.</p>
        <ContactButtons />
        <Image src={Layanan} alt="Layanan PT Cipta Pelangi" className="service-image" loading="lazy" />
    </section>
);

const ContactButtons = () => (
    <div className="contact-buttons">
        <a href="https://wa.me/NOMOR_WHATSAPP" className="contact-button whatsapp-button" aria-label="WhatsApp">
            <FaWhatsapp />
        </a>
        <a href="mailto:EMAIL_ANDA" className="contact-button email-button" aria-label="Email">
            <FaEnvelope />
        </a>
        <a href="sms:NOMOR_TELEPON" className="contact-button sms-button" aria-label="SMS">
            <FaSms />
        </a>
    </div>
);

export default ServiceSection;
