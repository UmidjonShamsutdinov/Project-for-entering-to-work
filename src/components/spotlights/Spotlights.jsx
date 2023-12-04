import React from 'react'
import "./Spotlights.scss"
import photo from "../../assets/newReleasedPhoto.png"
import photo1 from "../../assets/newReleasedPhoto1.png"
import photo2 from "../../assets/newReleasedPhoto2.png"
import photo3 from "../../assets/newReleasedPhoto3.png"
import Card from '../../layout/card/Card'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';

const Spotlights = () => {
    const arr = [
        {   
            type: "defaultP",
            img: photo,
            title: "Collaboration Secrets: Design X Engineering",
            links: ["Behind The Scenes"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "smallP",
            img: photo1,
            title: "Ask Spotify Design 07",
            links: ["Q+A"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "mediumP",
            img: photo2,
            title: "Making Moves: Designing Motion for 2022 Wrapped",
            links: ["Behind The Scenes"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "defaultP",
            img: photo3,
            title: "Zoned 44",
            links: ["Listen","Dance","Ambient","Electronic"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
    ]
  return (
    <div className='spotlights'>
        <Container>
            <div className="spotlights-title">
                <h2>In the Spotlight <br/> <span>Meet the humans who design Spotify</span></h2>
                <Link>View all stories <FaArrowRight className='arrow'/></Link>
            </div>
            <div className='cards'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        arr.map((e, i)=>
                            <SwiperSlide className='swiper-slide'>
                                <Link key={i}>
                                    <Card type={e.type} photo={e.img} title={e.title} description={e.description} links={e.links}/>
                                </Link>
                            </SwiperSlide>
                            )
                    }                    
                </Swiper>
            </div>
        </Container>
    </div>
  )
}

export default Spotlights