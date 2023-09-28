import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './images/Screenshot 2023-09-27 131305.png'
import image2 from './images/diego-ph-fIq0tET6llw-unsplash.jpg'
import image3 from './images/Screenshot 2023-09-27 145416.png'
import image4 from './images/Screenshot 2023-09-27 151130.png'
import { useState } from 'react';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      image: image1,
      title: 'Marleting is no more a risk you have to take.',
      content: 'We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth',
    },
    {
      image: image2,
      title: 'Designing is the main part of every company',
      content: 'We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth',
    },
    {
      image: image3,
      title: 'Digital Marketing is the key of bussiness growth',
      content: 'We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth',
    },
    {
      image: image4,
      title: 'Web and Mobile app development',
      content: 'We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth',
    },
    // Add more slide data as needed
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleBeforeChange = (currentSlide, nextSlide) => {
    setActiveSlide(nextSlide);
  };

  return (
    <div className="banner">
    <Slider {...settings} beforeChange={handleBeforeChange}>
      {slidesData.map((slide, index) => (
        <div key={index} className={`banner-slide ${activeSlide === index ? 'active-slide' : ''}`}>
          <div className="image-container">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="content-container">
            <p className='para1'>IT Service Agency</p>
            <h1>{slide.title}</h1>
            <p className='para2'>{slide.content}</p>
            <button>Get Started</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  )
};

export default Banner;