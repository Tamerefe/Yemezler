import './style/atess.css'

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
          
          <h1 className='absolute oswald leading-tight text-5xl top-1/3 left-64'><span className='text-yellow-500'>GOOD</span><br/> <span className='text-stone-800'>BURGER</span><br/> CHANGES <br/> YOUR <br/><span className='text-yellow-500'>MOOD</span></h1>
          <img className='absolute bottom-96 left-64' style={{width:"10.5rem"}} src="../public/img/Carousel/divider.png" alt="" />

          <img className='absolute top-12 left-1/3 w-1/2' src="../public/img/Carousel/BurgerUp.png" alt="" />
          <img className='absolute bottom-24 right-80 w-1/4 mr-3' src="../public/img/Carousel/BurgerUp2.jpg" alt="" />
          <div className="text-left absolute bottom-24 left-1/3 block max-w-md p-8 bg-slate-900 rounded-lg shadow">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Beef Bacon Burger</h1>
            <p className="mt-10 font-normal text-2xl text-white">150 gr. burger patty, cheddar cheese, beef bacon, tomato, caramelized onion, pickle, lettuce</p>
            <button className="button-r mt-9 text-xl font-semibold bg-red-700 hover:bg-red-900">Burger's</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-pointer'>
          <img className='blur w-full' src="../public/img/Carousel/Pizza.jpg" alt="" />
          
          <h1 className='absolute oswald leading-tight text-5xl top-1/3 left-64'><span className='text-yellow-500'>GOOD</span><br/> <span className='text-stone-800'>PIZZA</span><br/> CHANGES <br/> YOUR <br/><span className='text-yellow-500'>MOOD</span></h1>
          <img className='absolute bottom-96 left-64' style={{width:"10.5rem"}} src="../public/img/Carousel/divider.png" alt="" />

          <img className='absolute top-12 left-1/3 w-1/2' src="../public/img/Carousel/PizzaUp.jpg" alt="" />
          <img className='absolute bottom-24 right-80 w-1/4 mr-3' src="../public/img/Carousel/piza.png" alt="" />
          <div className="text-left absolute bottom-24 left-1/3 block max-w-md p-8 bg-slate-900 rounded-lg shadow">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Very Mixed <span className='text-xl'>(Medium) (32cm)</span></h1>
            <p className="mt-6 font-normal text-2xl text-white">Special Caesar Sauce, Mozzarella Cheese, Sausage, Ham, Mushroom, Corn, Green Pepper, Black Olives, Parmesan, Spice Mix.</p>
            <button className="button-r mt-6 text-xl font-semibold bg-red-700 hover:bg-red-900">Pizza's</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-pointer'>
          <img className='blur w-full' src="../public/img/Carousel/Hotdog.jpg" alt="" />
        
          <h1 className='absolute oswald leading-tight text-5xl top-1/3 left-64'><span className='text-yellow-500'>GOOD</span><br/> <span className='text-stone-800'>SANDWICH</span><br/> CHANGES <br/> YOUR <br/><span className='text-yellow-500'>MOOD</span></h1>
          <img className='absolute bottom-96' style={{width:"10.5rem",left:"16.5rem"}} src="../public/img/Carousel/divider.png" alt="" />

          <img className='absolute top-12 left-1/3 w-1/2' src="../public/img/Carousel/SandwichUp.jpg" alt="" />
          <img className='absolute bottom-24 right-80 w-1/4 mr-4' src="../public/img/Carousel/HotdogUp2.jpg" alt="" />
          <div className="text-left absolute bottom-24 left-1/3 block max-w-md p-8 bg-slate-900 rounded-lg shadow">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Pastrami Hot Dog</h1>
            <p className="mt-6 font-normal text-2xl text-white">75 gr. beef sausage, pastrami without fenugreek, pickle cubes, caramelized onion, homemade sauce, mustard, potatoes</p>
            <button className="button-r mt-6 text-xl font-semibold bg-red-700 hover:bg-red-900">Sandwiche's</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-pointer'>
          <img className='blur' src="../public/img/Carousel/Stek.jpg" alt="" />
          
          <h1 className='absolute oswald leading-tight text-5xl top-1/3 left-64'><span className='text-yellow-500'>GOOD</span><br/> <span className='text-stone-800'>STEAK</span><br/> CHANGES <br/> YOUR <br/><span className='text-yellow-500'>MOOD</span></h1>
          <img className='absolute bottom-96 left-64' style={{width:"10.5rem"}} src="../public/img/Carousel/divider.png" alt="" />

          <img className='absolute top-12 left-1/3 w-1/2' src="../public/img/Carousel/SteakUp.jpg" alt="" />
          <img className='absolute bottom-24 right-80 w-1/4 mr-3' src="../public/img/Carousel/SteakUp2.jpg" alt="" />
          <div className="text-left absolute bottom-24 left-1/3 block max-w-md p-8 bg-slate-900 rounded-lg shadow">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Steak Mix <span className='text-xl'>(8 pcs.)</span></h1>
            <p className="mt-6 font-normal text-2xl text-white">Lokum Steak, Entrecôte, Lamb Chop, Cheddar Meatballs, Julian Tenderloin, Cheddar Sauce, served with garnish and potatoes</p>
            <button className="button-r mt-6 text-xl font-semibold bg-red-700 hover:bg-red-900">Steak's</button>
          </div>
          </SwiperSlide>
      </Swiper>
      <div className='columns-3 min-h-sm'>
        <div>
          <img src="mosburger.jpg" alt="" />
        </div>
        <div>
          <img src="about.jpg" alt="" />
        </div>
        <div>
          <img src="dessert.jpg" alt="" />
        </div>
        
      </div>
    </>
  );
}