

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import images from './hero.js'; 

export default function Slider() {
  return (
    <div className="flex justify-center pt-3">
      <Swiper
        pagination={{ clickable: true }}
        className="w-full max-w-screen-lg shadow-lg rounded-lg overflow-hidden h-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

