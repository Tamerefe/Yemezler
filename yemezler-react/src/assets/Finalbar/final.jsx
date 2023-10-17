import React, { useRef, useState } from 'react';

export default function App() {
  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='my-8'>
          <h1 className='text-5xl text-gray-700 londra max-w-md mx-auto mt-4'>Some important Links</h1>
          <div className='grid grid-cols-2 text-lg text-left text-gray-500 max-w-xs mx-auto my-6 roboto'>
             <a className='max-w-[70%] mt-2' href="">Blog</a>
             <a className='max-w-[70%] mt-2' href="">Wishlist</a>
             <a className='max-w-[70%] mt-2' href="">About</a>
             <a className='max-w-[70%] mt-2' href="">Contact Us</a>
             <a className='max-w-[70%] mt-2' href="">FAQs</a>
             <a className='max-w-[70%] mt-2' href="">Privacy Policy</a>
             <a className='max-w-[70%] mt-2' href="">Order Tracking</a>
             <a className='max-w-[70%] mt-2' href="">Warranty and Services</a>
          </div>
          
        </div>
        <div className='my-2 text-lg border-l border-r '>
            <img className='w-32 mx-auto my-4' src="../../../public/Yemezler.png" alt="" />
            <p className='text-2xl my-3'>Yücetepe, Akdeniz Cd. No:31,<br/> 06570 Çankaya/Ankara</p>
            <p><span className='text-xl text-gray-500'>Number:</span> 1900 – 123 456 78</p>
            <p><span className='text-xl text-gray-500'>Email:</span> info@yemezler.com</p>
          
        </div>
        <div className='my-8 text-left'>
            <h1 className='text-5xl text-gray-700 londra max-w-md mx-10 mt-4'>Opening Hours</h1>
            <div className='text-lg text-left text-black max-w-md mx-10 my-8 roboto'>
                <p><span className='text-xl text-gray-500'>Monday-Friday: </span> 09:00 – 01:00h</p>
                <p><span className='text-xl text-gray-500'>Saturday: </span> 09:00 – 23:00h</p>
                <p><span className='text-xl text-gray-500'>Sunday: </span> 12:00 – 20:00h</p>
            </div>
        </div>
      </div>  
    </>
  );
}