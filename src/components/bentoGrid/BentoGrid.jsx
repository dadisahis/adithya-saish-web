import React from 'react'
import './grid.scss'
import Bento from '../bento/bento.jsx'
import skillsData from "../../data/skills.json"

function BentoGrid() {
  return (
    <div className='bento_grid'>
        <div className="grid_container">
            <div className="grid_right">
            <Bento width='80%' height='50%' color="linear-gradient(50deg, #29abbd 1%, #319994 25%, rgb(231, 191, 191) 150%)"   data={skillsData.frontend} title="frontend"/>
            <Bento width='80%' height='50%' data={skillsData.cloud} title="cloud"/>
            </div>
            <div className="grid_left">
            <Bento width='80%' height='89%' color="linear-gradient(50deg, #802a1f 1%, #8a281c 25%, rgb(228, 140, 140) 150%)" data={skillsData.backend} title="backend" />
            </div>
        </div>
        
        
    </div>
  )
}

export default BentoGrid