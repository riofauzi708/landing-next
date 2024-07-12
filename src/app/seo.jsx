"use client";

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ArticleList from '../components/ArticleList';
import FaqSection from '../components/FaqSection';
import ProductSlider from '../components/ProductSlider';
import ProjectGallery from '../components/ProjectGallery';
import ServiceSection from '../components/ServiceSection';
import Testimonials from '../components/Testimonials';
import Kantor from '../assets/img/kantor.jpg';
import Tim from '../assets/img/tim.jpg';

const Page = () => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('page-transition-enter-active');
    }, []);

    return (
        <div className={`app ${animationClass}`}>
            <SEO
                title="PT Cipta Pelangi - Inovasi untuk Masa Depan yang Lebih Cerah"
                description="Bersama PT Cipta Pelangi, temukan kemitraan yang membawa bisnis Anda ke tingkat berikutnya."
                keywords="inovasi digital, solusi bisnis, PT Cipta Pelangi, layanan digital, masa depan cerah"
                url="https://www.ciptapelangi.id"
                image="/assets/img/kantor.jpg"
            />
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

const Header = () => (
    <header className="hero">
        <div className="hero-content">
            <h1>Terobosan Baru, Masa Depan Cerah Bersama PT Cipta Pelangi</h1>
            <p>Kami bukan sekedar penyedia solusi, kami adalah mitra inovasi Anda.</p>
        </div>
        <Image src={Kantor} alt="Kantor PT Cipta Pelangi" className="hero-image" layout="responsive" width={700} height={475} />
    </header>
);

const Main = () => (
    <main>
        <ArticleList />
        <ProductSlider />
        <ServiceSection />
        <ProjectGallery />
        <Testimonials />
        <FaqSection />
    </main>
);

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <FooterSection title="Tentang Kami">
                <p>PT Cipta Pelangi adalah perusahaan yang berdedikasi untuk inovasi dan kualitas dalam layanan digital.</p>
            </FooterSection>
            <FooterSection title="Kontak">
                <p><strong>Alamat:</strong> Jl. Pelangi No.123, Jakarta, Indonesia</p>
                <p><strong>Email:</strong> info@ciptapelangi.id</p>
                <p><strong>Telepon:</strong> (021) 555-0123</p>
            </FooterSection>
            <FooterSection title="Ikuti Kami">
                <div>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </FooterSection>
            <FooterSection title="Link Cepat">
                <ul className="footer-links">
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Tentang</a></li>
                    <li><a href="#">Layanan</a></li>
                    <li><a href="#">Portofolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Kontak</a></li>
                </ul>
            </FooterSection>
        </div>
        <div className="footer-bottom">
            <p>© 2024 PT Cipta Pelangi. Hak cipta dilindungi undang-undang.</p>
            <Image src={Tim} alt="Tim PT Cipta Pelangi" className="team-image" layout="responsive" width={700} height={475} />
        </div>
    </footer>
);

const FooterSection = ({ title, children }) => (
    <div className="footer-section">
        <h4>{title}</h4>
        {children}
    </div>
);

export default Page;
