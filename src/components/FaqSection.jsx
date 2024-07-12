import React, { useState } from 'react';
import '../assets/css/FAQSection.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Bagaimana cara memulai proyek dengan PT Cipta Pelangi?",
            answer: "Anda bisa menghubungi kami melalui email, WhatsApp, atau telepon untuk konsultasi awal."
        },
        {
            question: "Apa saja layanan yang ditawarkan oleh PT Cipta Pelangi?",
            answer: "Kami menawarkan berbagai layanan termasuk konsultasi bisnis, pengembangan perangkat lunak, dan solusi IT."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah proyek?",
            answer: "Waktu penyelesaian proyek tergantung pada kompleksitas dan skala proyek. Kami akan memberikan estimasi waktu setelah konsultasi awal."
        },
        {
            question: "Bagaimana proses pembayaran untuk layanan PT Cipta Pelangi?",
            answer: "Pembayaran dapat dilakukan melalui transfer bank. Kami juga menawarkan opsi pembayaran bertahap sesuai dengan milestone proyek."
        },
        {
            question: "Apakah PT Cipta Pelangi menyediakan dukungan setelah proyek selesai?",
            answer: "Ya, kami menyediakan dukungan dan pemeliharaan setelah proyek selesai untuk memastikan semuanya berjalan lancar."
        },
    ];

    const toggleFAQ = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-section">
            <h3>Pertanyaan yang Sering Diajukan</h3>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </div>
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
