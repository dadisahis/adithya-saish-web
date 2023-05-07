import React, { useState } from 'react'
import './techstack.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { EffectFade } from 'swiper';
import skillsData from "../../data/skills.json"
import rocketImg from "../../assets/Rocket2.png"
import 'swiper/css';
function TechStack() {
    const setCount = ()=>{
        let count=0;
        if(window.innerWidth>1000){
            count=5
        }else{
            count=3
        }
        return count
    }
    console.log(window.innerWidth)
    
  return (
    <div className='techstack'>
        {/* <h1>TECH STACK</h1> */}
        <div className="slider_container">
            <Swiper 
            spaceBetween={10}
            autoplay={{
                delay:100,
              }}
            speed={2000}
            loop
            modules={[Autoplay]}
            slidesPerView={setCount()}
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