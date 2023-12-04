import React from 'react'
import "./Hero.scss"
import { Container } from '../../utils/Utils'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='hero'>
        <Container>
            <div className='Hero__items'>
                <h2 className='hero__title'>Spotify Design</h2>
                    <div className="hero__content">
                        <p>Behind The Scenes</p>
                        <h3>Collaboration Secrets:Design X Engineering</h3>
                    </div>
                <div>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero