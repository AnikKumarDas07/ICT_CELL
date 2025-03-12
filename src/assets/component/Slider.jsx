import React, { useState, useEffect } from 'react';
import '../css/slider.css'; 
import image1 from "../images/slider/img1.png";
import image2 from "../images/slider/img2.png";
import image3 from "../images/slider/img3.png";

const images = [
  image1,
  image2,
  image3,
  
];

const Slider = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="slider-image"
      />
      <div className="controls">
        <button onClick={prevImage}>&lt;</button> 
        <button onClick={nextImage}>&gt;</button> 
      </div>
    </div>
  );
};

export default Slider;
