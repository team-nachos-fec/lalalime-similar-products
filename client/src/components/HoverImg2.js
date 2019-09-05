import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg2 = ({pic2, swatch2, img2Index, onMouseOver}) => {
  
  return (
    <div className="hoverImg">
      {/* {console.log('test img1',pic2.slice(2,3))} */}
      <div className="nest" id="img2">  
          <img 
          className="hoverMainImg hovPic2" 
          src={pic2[img2Index].slice(2,3)} 
          alt="Hover Image" 
          onMouseOver={(e) => onMouseOver(e)}
          /> 
        <div className="swatch-bg">
          <button className="svgButton"><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f"/></button>
            <img 
              className="swatchImg hoverbox1" 
              src={swatch2[0].slice(1,2)} 
              alt="swatch Image" 
              name="0"
              id="img2"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox2" 
              src={swatch2[1].slice(1,2)} 
              alt="swatch Image"
              name="1" 
              id="img2"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox3" 
              src={swatch2[2].slice(1,2)} 
              alt="swatch Image"
              name="2" 
              id="img2"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox4" 
              src={swatch2[3].slice(1,2)} 
              alt="swatch Image"
              name="3" 
              id="img2"
              onMouseOver={(e) => onMouseOver(e)}
              />
          <button className="svgButton rbttn"><FaAngleRight className="svgIcon" size={30} color="#7f7f7f"/></button>
        </div>
      </div>
    </div>
  )
}

export default HoverImg2;