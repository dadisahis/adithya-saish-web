import React from 'react'
import "./techitem.scss"

function TechItem({data, type}) {
  console.log(data.img_url)
  return (
    <div className='tech_item'>
        <div className="tech_item_top">
            <img src={data.img_url} alt='' />
        </div>
        <div className="tech_item_bottom">
            <p className='stack_title'>{data.name}</p>
            <p className='type'>{type}</p>

        </div>

        
    </div>
  )
}

export default TechItem