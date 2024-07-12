import React from 'react';
import '../assets/css/Testimonial.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Layanan PT Cipta Pelangi benar-benar mengubah cara kami berbisnis. Sangat direkomendasikan!",
            name: "Andi Sunandi",
            position: "CEO Sunan Group",
        },
        {
            quote: "Tim yang sangat profesional dan hasil kerja yang luar biasa. Kami sangat puas dengan layanan mereka.",
            name: "Budi Santoso",
            position: "Manager Operasional, PT Maju Jaya",
        },
        {
            quote: "Kerja sama dengan PT Cipta Pelangi sangat memuaskan. Mereka selalu memberikan solusi terbaik.",
            name: "Citra Dewi",
            position: "Direktur Keuangan, CV Sejahtera",
        },
        {
            quote: "Pelayanan yang cepat dan hasil yang memuaskan. Kami akan terus bekerja sama dengan mereka.",
            name: "Dewi Lestari",
            position: "Pemilik, Toko Lestari",
        },
        {
            quote: "PT Cipta Pelangi memberikan layanan yang sangat profesional dan berkualitas tinggi.",
            name: "Eko Prasetyo",
            position: "Kepala Divisi IT, PT Teknologi Nusantara",
        },
    ];

    return (
        <div className="testimonials-section">
            <h3>Apa Kata Mereka Tentang Kami</h3>
            <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop transitionTime={600} emulateTouch>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <blockquote>{testimonial.quote}</blockquote>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
