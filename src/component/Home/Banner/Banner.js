import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './Banner.css'

import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper';

const Banner = () => {
  return (
  
      <div className='home-banner p-2 max-w-screen-2xl mx-auto'>
        <div className="carousel w-full ">


            <div id="slide1" className="carousel-item relative w-full ">

              <div className='w-full img-gradient'>
                <img alt=' ' src="https://i.ibb.co/z72P1K6/pexels-jess-bailey-designs-788946.jpg" className=" " />

              </div>


              <div className='absolute banner-blg-div top-1/4 left-5 md:top-1/4 md:left-24 banner-h1'>
                <h1 className=' text-6xl text-white font-bold '>Sell your mobile with  <br /> <span className='text-red-700'>Best price</span></h1>
                <p className='text-white mt-5 text-xl'>Fortunately you've come to the right place! SellCell is the best place to sell phones, tablets and other mobile <br /> devices. We compare prices from all the leading cell phone buyers in the US to get you the most cash and also save <br /> you time and hassle. <span className='extra'>If you want to sell a phone or tablet then SellCell is the only site you need!</span> </p>
              </div>



              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

         
         
          <div id="slide2" className="carousel-item relative w-full">
            <div className='w-full img-gradient '>
              <img alt=' ' src="https://i.ibb.co/sj1726n/pexels-tyler-lastovich-719399.jpg" className="w-full" />
            </div>




            <div className='absolute top-1/4 left-5 md:top-1/4 md:left-24 banner-h1 banner-blg-div'>
              <h1 className='text-4xl md:text-6xl text-white font-bold '>    You can buy phone in <br /> <span className='text-red-700'>Cheapest Price</span></h1>
              <p className='text-white mt-5 text-xl'>Forget the spendy option and get a seriously great affordable smartphone instead.  I’ve tested dozens to find cheap smartphones <br />that perform where it counts and aren’t annoyingly slow. Our top pick, the Google Pixel 6A, <br /> is as good as almost any device <span className='extra'>, and our other choices strike a great balance between price and luxury.</span></p>
            </div>



            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
         


         
          <div id="slide3" className="carousel-item relative w-full">

            <div className='w-full img-gradient'>
              <img alt=' ' src="https://i.ibb.co/pyNyMWK/pexels-fauxels-3183175.jpg" className="w-full" />

            </div>






            <div className='absolute top-1/4 left-5 md:top-1/4 md:left-24 banner-h1 banner-blg-div'>
              <h1 className='text-4xl md:text-6xl text-white font-bold '>    You can easily  <br /> <span className='text-red-700'>Connect With Your Byer </span></h1>
              <p className='text-white mt-5 text-xl'>Generate leads, drive website traffic, and build brand awareness


                Marketing on LinkedIn helps <br /> you engage a community of professionals to drive actions <span className='extra'>that are relevant to your business.</span></p>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
         


         
          <div id="slide4" className="carousel-item relative w-full">

            <div className='w-full img-gradient'>

              <img alt=' ' src="https://i.ibb.co/sj1726n/pexels-tyler-lastovich-719399.jpg" className="w-full" />


            </div>


            <div className='absolute top-1/4 left-5 md:top-1/4 md:left-24 banner-h1 banner-blg-div'>
              <h1 className='text-6xl text-white font-bold '>    You can buy phone in <br /> <span className='text-red-700'>Cheapest Price</span></h1>
              <p className='text-white mt-5 text-xl'>Forget the spendy option and get a seriously great affordable smartphone instead.  I’ve tested dozens to find cheap smartphones <br />that perform where it counts and aren’t annoyingly slow. <span className='extra'>Our top pick, the Google Pixel 6A, <br /> is as good as almost any device, and our other choices strike a great balance between price and luxury.</span></p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
         



        </div>
      </div>
 

    // <div>
    //   <Swiper
    //     spaceBetween={50}
    //     slidesPerView={1}
    //     onSlideChange={() => console.log('slide change')}
    //     onSwiper={(swiper) => console.log(swiper)}
    //   >
    //    Slide 1</SwiperSlide>
    //    Slide 2</SwiperSlide>
    //    Slide 3</SwiperSlide>
    //    Slide 4</SwiperSlide>
    //     ...
    //   </Swiper>
    // </div>

  );
};

export default Banner;