import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg2 = ({pic2}) => {
  
  return (
    <div class="hoverImg">
      {/* {console.log('test img1',pic2.slice(2,3))} */}
      <div class="nest">      
          <img 
          class="hoverMainImg hovPic2" 
          src={pic2.slice(2,3)} 
          alt="Hover Image" 
          />
        <div class="swatch-bg">
          <button class="svgButton"><FaAngleLeft class="svgIcon" size={30} color="#7f7f7f"/></button>
          <a href="#">
            <img 
            class="swatchImg hoverbox1" 
            src={pic2.slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            class="swatchImg hoverbox2" 
            src={pic2.slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            class="swatchImg hoverbox3" 
            src={pic2.slice(1,2)} 
            alt="swatch Image" 
            />
            <img 
            class="swatchImg hoverbox4" 
            src={pic2.slice(1,2)} 
            alt="swatch Image" 
            />
          </a>
          
          <button class="svgButton rbttn"><FaAngleRight class="svgIcon" size={30} color="#7f7f7f"/></button>
        </div>
      </div>
    </div>
  )
}

export default HoverImg2;