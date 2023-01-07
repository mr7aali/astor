import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Banner.css';

import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto ">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


        <SwiperSlide>
          <div className="img-gradient">
            <img alt=' ' src="https://i.ibb.co/z72P1K6/pexels-jess-bailey-designs-788946.jpg" className=" " />
          </div>
          <div className='Banner-Blg-container'>
            <h1 className=' text-6xl text-white font-bold '>Sell your mobile with  <br /> <span className='text-red-700'>Best price</span></h1>
            <p className='text-white mt-20 text-xl'>Fortunately you've come to the right place! SellCell is the best place to sell phones, tablets and other mobile <br /> devices. We compare prices from all the leading cell phone buyers in the US to get you the most cash and also save <br /> you time and hassle. <span className='extra'>If you want to sell a phone or tablet then SellCell is the only site you need!</span> </p>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="img-gradient">
          <img alt=' ' src="https://i.ibb.co/pyNyMWK/pexels-fauxels-3183175.jpg" className=" " />
          </div>
          <div className='Banner-Blg-container'>
            <h1 className=' text-6xl text-white font-bold '> You can buy phone in <br /> <span className='text-red-700'>Cheapest Price</span></h1>
            <p className='text-white mt-20 text-xl'>
            Forget the spendy option and get a seriously great affordable smartphone instead.  I’ve tested dozens to find cheap smartphones <br />that perform where it counts and aren’t annoyingly slow. Our top pick, the Google Pixel 6A, <br /> is as good as almost any device <span className='extra'>, and our other choices strike a great balance between price and luxury.</span></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-gradient">
          <img alt=' ' src="https://i.ibb.co/sj1726n/pexels-tyler-lastovich-719399.jpg" className=" " />
          </div>
          <div className='Banner-Blg-container'>
            <h1 className=' text-6xl text-white font-bold '> You can easily  <br /> <span className='text-red-700'>Connect With Your Byer </span></h1>
            <p className='text-white mt-20 text-xl'>Generate leads, drive website traffic, and build brand awareness


           Marketing on LinkedIn helps <br /> you engage a community of professionals to drive actions <span className='extra'>that are relevant to your business.</span> </p>
          </div>
        </SwiperSlide>




      </Swiper>
    </div>

  );
};

export default Banner;