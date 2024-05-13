import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonIcon } from '@ionic/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import EffectCoverflow from 'swiper';
import Navigation from 'swiper';
import Pagination from 'swiper';

function App() {
    return (
        <div className="container">
            <h1 className="heading">My Projects</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='h-full w-full block object-cover' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'https://images.pexels.com/photos/1108313/pexels-photo-1108313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='h-full w-full block object-cover' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'https://images.pexels.com/photos/1108313/pexels-photo-1108313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='h-full w-full block object-cover' alt="slide_image" />
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <IonIcon name="arrow-back-outline" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <IonIcon name="arrow-forward-outline" />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default App;