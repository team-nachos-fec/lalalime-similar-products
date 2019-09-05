import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg3 = ({pic3, swatch3, img3Index, onMouseOver}) => {
  
  return (
    <div className="hoverImg">
      {/* {console.log('test img1',pic3.slice(2,3))} */}
      <div className="nest">  
          <img 
          className="hoverMainImg hovPic3" 
          src={pic3[img3Index].slice(2,3)} 
          alt="Hover Image" 
          /> 
        <div className="swatch-bg">
          <button className="svgButton"><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f"/></button>
            <img 
              className="swatchImg hoverbox1" 
              src={swatch3[0].slice(1,2)} 
              alt="swatch Image" 
              name="0"
              id="img3"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox2" 
              src={swatch3[1].slice(1,2)} 
              alt="swatch Image"
              name="1" 
              id="img3"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox3" 
              src={swatch3[2].slice(1,2)} 
              alt="swatch Image"
              name="2" 
              id="img3"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox4" 
              src={swatch3[3].slice(1,2)} 
              alt="swatch Image"
              name="3" 
              id="img3"
              onMouseOver={(e) => onMouseOver(e)}
              />
          <button className="svgButton rbttn"><FaAngleRight className="svgIcon" size={30} color="#7f7f7f"/></button>
        </div>
      </div>
    </div>
  )
}

export default HoverImg3;