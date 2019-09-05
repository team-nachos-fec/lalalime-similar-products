import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg4 = ({pic4, swatch4, img4Index, onMouseOver}) => {
  
  return (
    <div className="hoverImg">
      {/* {console.log('test img1',pic4.slice(2,3))} */}
      <div className="nest">  
          <img 
          className="hoverMainImg hovPic4" 
          src={pic4[img4Index].slice(2,3)} 
          alt="Hover Image" 
          /> 
        <div className="swatch-bg">
          <button className="svgButton"><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f"/></button>
            <img 
              className="swatchImg hoverbox1" 
              src={swatch4[0].slice(1,2)} 
              alt="swatch Image" 
              name="0"
              id="img4"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox2" 
              src={swatch4[1].slice(1,2)} 
              alt="swatch Image"
              name="1" 
              id="img4"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox3" 
              src={swatch4[2].slice(1,2)} 
              alt="swatch Image"
              name="2" 
              id="img4"
              onMouseOver={(e) => onMouseOver(e)}
              />
              <img 
              className="swatchImg hoverbox4" 
              src={swatch4[3].slice(1,2)} 
              alt="swatch Image"
              name="3" 
              id="img4"
              onMouseOver={(e) => onMouseOver(e)}
              />
          <button className="svgButton rbttn"><FaAngleRight className="svgIcon" size={30} color="#7f7f7f"/></button>
        </div>
      </div>
    </div>
  )
}

export default HoverImg4;