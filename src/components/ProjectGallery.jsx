import React, { useState } from 'react';
import '../assets/css/ProjectGallery.css';
import Image from 'next/image';
import Project1 from '../assets/img/projek1.jpg';
import Project2 from '../assets/img/projek2.png';
import Project3 from '../assets/img/projek3.webp';
import Project4 from '../assets/img/projek4.webp';
import Project5 from '../assets/img/projek5.jpg';

const ProjectGallery = () => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="project-gallery">
            <h1>Galeri Proyek Kami</h1>
            <p>Selamat datang di galeri proyek kami. Di sini Anda dapat melihat berbagai proyek yang telah kami kerjakan.</p>
            <div className="gallery-container">
                <div className="gallery-item" onClick={() => openLightbox(Project1)}>
                    <Image src={Project1} alt="Proyek 1 - Deskripsi singkat proyek 1" />
                    <p>Deskripsi Proyek 1</p>
                </div>
                <div className="gallery-item" onClick={() => openLightbox(Project2)}>
                    <Image src={Project2} alt="Proyek 2 - Deskripsi singkat proyek 2" />
                    <p>Deskripsi Proyek 2</p>
                </div>
                <div className="gallery-item" onClick={() => openLightbox(Project3)}>
                    <Image src={Project3} alt="Proyek 3 - Deskripsi singkat proyek 3" />
                    <p>Deskripsi Proyek 3</p>
                </div>
                <div className="gallery-item" onClick={() => openLightbox(Project4)}>
                    <Image src={Project4} alt="Proyek 4 - Deskripsi singkat proyek 4" />
                    <p>Deskripsi Proyek 4</p>
                </div>
                <div className="gallery-item" onClick={() => openLightbox(Project5)}>
                    <Image src={Project5} alt="Proyek 5 - Deskripsi singkat proyek 5" />
                    <p>Deskripsi Proyek 5</p>
                </div>
            </div>

            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <Image src={lightboxImage} alt="Lightbox" />
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
