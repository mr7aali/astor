import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Banner.css';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Button } from "@mui/material";


const Banner = () => {
  return (
    <div className="  ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2550,
          disableOnInteraction: true,
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
            <h1 className='text-4xl md:text-5xl xl:text-6xl text-white font-bold text-center'>Sell your mobile with  <br /> <span className='text-red-700'>Best price</span></h1>
            <p className='text-white mt-2 mb-2 md:m-10 px-10 md:text-2xl xl:text-3xl text-center '>Fortunately you've come to the right place! SellCell is the best place to sell phones, tablets and other mobile devices. We compare prices from all the leading cell phone buyers in the US to get you the most cash and also save  you time and hassle. <span className='extra'>If you want to sell a phone or tablet then SellCell is the only site you need!</span> </p>

            <div className="h-14 w-1/3 mx-auto mt-[10px] md:mt-[130px]" >
              <Button style={{
                border: '1px solid white'
              }} variant="text" fullWidth color="primary" size="large">
                <span className="text-[white] font-bold"> Bye Phone</span>
              </Button>
            </div>

          </div>




        </SwiperSlide>

        <SwiperSlide>
          <div className="img-gradient">
            <img alt=' ' src="https://i.ibb.co/pyNyMWK/pexels-fauxels-3183175.jpg" className=" " />
          </div>
          <div className='Banner-Blg-container'>
            <h1 className='text-4xl md:text-5xl xl:text-6xl text-white font-bold text-center'> You can buy phone in <br /> <span className='text-red-700'>Cheapest Price</span></h1>
            <p className='text-white mt-2 mb-2 md:m-10 px-10 md:text-2xl xl:text-3xl text-center '>
              Forget the spendy option and get a seriously great affordable smartphone instead.  I’ve tested dozens to find cheap smartphones that perform where it counts and aren’t annoyingly slow. Our top pick, the Google Pixel 6A, is as good as almost any device <span className='extra'>, and our other choices strike a great balance between price and luxury.</span></p>

            <div className="h-14 w-1/3 mx-auto mt-[10px] md:mt-[130px]" >
              <Button style={{
                border: '1px solid white'
              }} variant="text" fullWidth color="primary" size="large">
                <span className="text-[white] font-bold"> Bye Phone</span>
              </Button>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-gradient">
            <img alt=' ' src="https://i.ibb.co/sj1726n/pexels-tyler-lastovich-719399.jpg" className=" " />
          </div>
          <div className='Banner-Blg-container'>
            <h1 className='text-4xl md:text-5xl xl:text-6xl text-white font-bold text-center'> You can easily  <br /> <span className='text-red-700'>Connect With Your Byer </span></h1>
            <p className='text-white mt-2 mb-2 md:m-10 px-10 md:text-2xl xl:text-3xl text-center '>Generate leads, drive website traffic, and build brand awareness


              Marketing on LinkedIn helps  you engage a community of professionals to drive actions <span className='extra'>that are relevant to your business.</span> </p>


            <div className="h-14 w-1/3 mx-auto mt-[10px] md:mt-[130px]" >
              <Button style={{
                border: '1px solid white'
              }} variant="text" fullWidth color="primary" size="large">
                <span className="text-[white] font-bold"> Bye Phone</span>
              </Button>
            </div>


          </div>

        </SwiperSlide>

      </Swiper>
    </div>

  );
};

export default Banner;