import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Produk1 from '../assets/img/produk1.png';
import Produk2 from '../assets/img/produk2.png';
import Produk3 from '../assets/img/produk3.png';
import Produk4 from '../assets/img/produk4.png';
import Produk5 from '../assets/img/produk5.png';
import Produk6 from '../assets/img/produk6.png';

const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <section className="product-section">
            <h2>Produk Unggulan Kami</h2>
            <p>Setiap produk kami adalah langkah maju menuju efisiensi dan keberlanjutan.</p>
            <Slider {...settings}>
                <div><Image src={Produk1} alt="Produk 1" /></div>
                <div><Image src={Produk2} alt="Produk 2" /></div>
                <div><Image src={Produk3} alt="Produk 3" /></div>
                <div><Image src={Produk4} alt="Produk 4" /></div>
                <div><Image src={Produk5} alt="Produk 5" /></div>
                <div><Image src={Produk6} alt="Produk 6" /></div>
            </Slider>
        </section>
    );
};

export default ProductSlider;
