import React from 'react'
import './bento.scss'
import TechItem from '../techItem/TechItem'

function Bento({height, width, color, data,title}) {
    const style = {
        height: height,
        width: width,
        background: color
    }
  return (
    <div className='bento' style={style}>
        <div className="bento_container">
          {data.map((item,index)=>(
              <TechItem key={index} data={item} type={title} />
          ))}
        </div>
    </div>
  )
}

export default Bento