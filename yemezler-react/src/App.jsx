import './App.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';


export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className='cursor-pointer'>
          <img className='blur w-full' src="../public/img/Carousel/Burger.jpg" alt="" />
          
          <img className='absolute top-12 left-1/3 w-1/2 ' src="../public/img/Carousel/BurgerUp.png" alt="" />
          <img className='absolute bottom-24 right-80 w-1/4' src="../public/img/Carousel/BurgerUp2.jpg" alt="" />
          <div className="text-left absolute bottom-24 left-1/3 block max-w-sm p-8 bg-slate-900 rounded-lg shadow">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Beef Bacon Burger</h1>
            <p className="mt-6 font-normal text-2xl text-white">150 gr. burger patty, cheddar cheese, beef bacon, tomato, caramelized onion, pickle, lettuce</p>
            <button className="mt-6 text-xl font-semibold bg-red-700 hover:bg-red-900">Burgers</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-pointer'><img className='blur' src="../public/img/Carousel/Pizza.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='cursor-pointer'><img className='blur' src="../public/img/Carousel/Hotdog.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='cursor-pointer'><img className='blur' src="../public/img/Carousel/Stek.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}