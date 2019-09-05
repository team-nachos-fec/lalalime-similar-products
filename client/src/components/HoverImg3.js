import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg3 = ({pic3}) => {
  
  return (
    <div className="hoverImg">
      <div className="nest">      
          <img 
          className="hoverMainImg hovPic3" 
          src={pic3[0].slice(2,3)} 
          alt="Hover Image" 
          />
        <div className="swatch-bg">
          <button className="svgButton"><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f"/></button>
          <a href="#">
            <img 
            className="swatchImg hoverbox1" 
            src={pic3[0].slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            className="swatchImg hoverbox2" 
            src={pic3[1].slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            className="swatchImg hoverbox3" 
            src={pic3[2].slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            className="swatchImg hoverbox4" 
            src={pic3[3].slice(1,2)} 
            alt="swatch Image" 
            />
          </a>
          
          <button className="svgButton rbttn"><FaAngleRight className="svgIcon" size={30} color="#7f7f7f"/></button>
        </div>
      </div>
    </div>
  )
}

export default HoverImg3;