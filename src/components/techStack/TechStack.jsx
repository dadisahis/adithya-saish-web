import React from 'react'
import './techstack.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { EffectFade } from 'swiper';
import skillsData from "../../data/skills.json"
import rocketImg from "../../assets/Rocket2.png"
import 'swiper/css';
function TechStack() {
  return (
    <div className='techstack'>
        {/* <h1>TECH STACK</h1> */}
        <div className="slider_container">
            <Swiper 
            spaceBetween={20}
            autoplay={{
                delay:100,
              }}
            speed={2000}
            loop
            modules={[Autoplay]}
            slidesPerView={3}
            className='swiper_wrappper'>
                {skillsData.skills.map((item)=>(
                    <SwiperSlide className='item'>
                    <img src={rocketImg} alt='' />
                    <p>{item}</p>
                    </SwiperSlide>
                ))
                
                }
            </Swiper>

        </div>
    </div>
  )
}

export default TechStack