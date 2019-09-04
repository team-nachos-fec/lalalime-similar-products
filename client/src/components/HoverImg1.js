import React from 'react';

const HoverImg1 = ({pic1}) => {
  
  return (
    <div class="hoverImg">
      {/* {console.log('test img1',pic1.slice(2,3))} */}
        <img 
        class="hoverMainImg hovPic1" 
        src={pic1.slice(2,3)} 
        alt="Hover Image" 
        />
      <div class="swatch-bg">
        <img 
        class="swatchImg" 
        src={pic1.slice(1,2)} 
        alt="swatch Image" 
        />
        <img 
        class="swatchImg" 
        src={pic1.slice(1,2)} 
        alt="swatch Image" 
        />
        <img 
        class="swatchImg" 
        src={pic1.slice(1,2)} 
        alt="swatch Image" 
        />
      </div>
    </div>
  )
}

export default HoverImg1;