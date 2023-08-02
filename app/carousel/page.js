'use client'

// pages/Slider.js
import React, { useState } from 'react';
import Image from 'next/image';

const Slider = () => {
    const images = [
        '/sliider-img/slide-3.jpg', // Replace with the URL or path of your first image
        '/sliider-img/slide-2.jpg', // Replace with the URL or path of your second image
        '/sliider-img/slide-3.jpg', // Replace with the URL or path of your third image
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative " style={{ width: '100%', height: '400px' }}>
            <Image
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full">
                <button
                    className="text-white text-2xl p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
                    onClick={handlePrev}
                >
                    &lt;
                </button>

                <button
                    className="text-white text-2xl p-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;
