import React, { useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'; // Import the custom CSS file for animations and styles
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SmallCarousel = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex items-center justify-center">
      {/* <button onClick={handlePrevClick} className="absolute left-0 transform -translate-y-1/2 top-1/2 text-3xl text-gray-700 bg-white rounded-full p-1 shadow-lg z-10">
        <IoIosArrowBack />
      </button> */}
      <div className="small-carousel-container flex overflow-hidden max-w-[60%]">
        <div className="small-carousel-track flex">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="w-60 h-60 gap-x-1 rounded-full overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-110"
              onClick={() => onImageClick(index % images.length)}
            >
              <img src={image} alt={`carousel-${index}`} className="w-full h-full object-cover rounded-full" />
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={handleNextClick} className="absolute right-0 transform -translate-y-1/2 top-1/2 text-3xl text-gray-700 bg-white rounded-full p-1 shadow-lg z-10">
        <IoIosArrowForward />
      </button> */}
    </div>
  );
};

const BiggerCarousel = ({ images, selectedIndex, onClose, isClosing }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 ${isClosing ? 'fade-out' : 'fade-in'}`}>
      <div style={{ width: '50%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className="absolute top-4 right-4 text-white bg-black z-100 opacity-100" onClick={onClose}>
          Close
        </button>
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveCarousel selectedItem={selectedIndex} showThumbs={false} showStatus={false}>
            {images.map((image, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={image} alt={`carousel-${index}`} style={{ maxWidth: '60%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [isBiggerCarouselOpen, setIsBiggerCarouselOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const images = [
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
    "/rajiv_bhushan.jpeg",
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsBiggerCarouselOpen(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsBiggerCarouselOpen(false);
    }, 500); // Match the duration of the fade-out animation
  };

  return (
    <div className="p-6 overflow-hidden mt-32 mb-32 max-w-[60%] mx-auto">
      <div className="p-6 text-3xl mb-10 font-serif font-bold">
        Team Members
        <hr className="border-t-2 border-gray-300 my-4" />
      </div>
      <div className="flex items-center justify-center p-4">
        <SmallCarousel images={images} onImageClick={handleImageClick} />
        {isBiggerCarouselOpen && (
          <BiggerCarousel images={images} selectedIndex={selectedIndex} onClose={handleClose} isClosing={isClosing} />
        )}
      </div>
    </div>
  );
};

export default Carousel;
