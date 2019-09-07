import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg1 = ({pic1, swatch1, img1Index, onMouseOver, i1, onMouseMain, onMouseMainLeave}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i1 ? <img
          className="hoverMainImg hovPic1"
          src={pic1[img1Index].slice(2,3)}
          alt="Hover Image"
          id="i1"
          onMouseOver={onMouseMain}
          onMouseOut={onMouseMainLeave}
        /> : <img
        className="hoverMainImg hovPic1"
        src={pic1[img1Index].slice(3,4)}
        alt="Hover Image"
        id="i1"
        onMouseOver={onMouseMain}
        onMouseOut={onMouseMainLeave}
        />}
        <div className="swatch-bg">
          <button className="svgButton"><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <img
            className="swatchImg hoverbox1 img1"
            src={swatch1[0].slice(1, 2)}
            alt="swatch Image"
            name="0"
            id="img1"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox2 img1"
            src={swatch1[1].slice(1, 2)}
            alt="swatch Image"
            name="1"
            id="img1"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox3 img1"
            src={swatch1[2].slice(1, 2)}
            alt="swatch Image"
            name="2"
            id="img1"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox4 img1"
            src={swatch1[3].slice(1, 2)}
            alt="swatch Image"
            name="3"
            id="img1"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <button className="svgButton rbttn"><FaAngleRight className="svgIcon" size={30} color="#7f7f7f" /></button>
        </div>
      </div>
    </div>
  )
}



export default HoverImg1;