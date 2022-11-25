import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='home-banner p-2 max-w-screen-2xl mx-auto'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">

                    <div className='w-full img-gradient'>
                        <img alt=' ' src="https://i.ibb.co/z72P1K6/pexels-jess-bailey-designs-788946.jpg" className=" " />
                        
                    </div>
                    
                    
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-white font-bold '>Healthy Body <br /> <span className='text-red-700'>Fresh Mind</span></h1>
                        <p className='text-white mt-5 text-2xl'>Livestrong has an incredible wealth of information on exercises, health care, <br/> physical health, mental health and more. It is updated multiple times a day and comes complete , <br/> with great forums and up-to-date information about fitness trends that are relevant in today’s world.</p>
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
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide3" className="carousel-item relative w-full">

                    <div className='w-full img-gradient'>
                        <img alt=' ' src="https://i.ibb.co/pyNyMWK/pexels-fauxels-3183175.jpg" className="w-full" />

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide4" className="carousel-item relative w-full">
                    <img alt=' ' src="https://i.ibb.co/sj1726n/pexels-tyler-lastovich-719399.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;