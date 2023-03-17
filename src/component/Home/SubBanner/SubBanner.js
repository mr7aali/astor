import React from 'react';
import './SubBanner.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box } from '@mui/system';

const SubBanner = () => {
    return (

        <div style={{
            padding: '40px 0px',
            // background:"#DBF7F6"
           // border:'1px solid red'
        }}>
            <div className='Sub-banner-container md:gap-4 max-w-screen-xl mx-auto md:grid md:grid-cols-12 '>
              
                <div className='box m-3 md:m-0 hidden md:flex col-span-4 h-[300px] shadow-md'>
                    <Box className='sub-banner-img-container'>
                        <img className='h-[100%]' src="https://i.ibb.co/MPkYtpF/delivery.jpg" alt="" srcSet="" />
                    </Box>
                </div>

                <div className='box m-3 md:m-0  md:col-span-8 h-[300px] shadow-md'>
                    <>
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
                                <Box className='sub-banner-img-container'>
                                    <img src="https://i.ibb.co/tPxWvCw/realmi.jpg" alt="" srcSet="" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className='sub-banner-img-container'>
                                    <img src="https://i.ibb.co/PW2HtSN/oppo-f19-pro.png" alt="" srcSet="" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className='sub-banner-img-container'>
                                    <img src="https://i.ibb.co/fxjRy0y/vivo-x80.png" alt="" srcSet="" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className='sub-banner-img-container'>
                                    <img src="https://i.ibb.co/QCFx4xr/xiaomi-redmi-note-11-pro.png" alt="" srcSet="" />
                                </Box>
                            </SwiperSlide>

                        </Swiper>
                    </>
                </div>

                <div className='box m-3 md:m-0 md:col-span-6 h-[170px] shadow-md '>
                    <Box className='sub-banner-img-container'>
                        <img src="https://i.ibb.co/Mn2xFcf/mobilepoint-gadget.jpg" alt="" srcSet="" />
                    </Box>
                </div>
                <div className='box m-3 md:m-0  md:col-span-6 h-[170px] shadow-md'>
                    <Box className='sub-banner-img-container'>
                        <img src="https://i.ibb.co/KFb0dhJ/gadget-2.jpg" alt="" srcSet="" />
                    </Box>
                </div>
                <div className='box m-3 md:m-0 flex md:hidden col-span-4 h-[300px] shadow-md'>
                    <Box className='sub-banner-img-container'>
                        <img className='h-[100%]' src="https://i.ibb.co/MPkYtpF/delivery.jpg" alt="" srcSet="" />
                    </Box>
                </div>
            </div>
        </div>

    );
};

export default SubBanner;