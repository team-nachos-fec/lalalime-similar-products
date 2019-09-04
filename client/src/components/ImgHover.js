import React from 'react';
import HoverImg1 from './HoverImg1';
import HoverImg2 from './HoverImg2';


const Imghover = ({img}) => {
  if (img.length > 0) {
    return (
      <div class="hoverListImg">
        {/* {console.log('pic1', img[0][0])} */}
        <HoverImg1 pic1={img[0][0]}/>
        <HoverImg2 pic2={img[0][0]}/>
      </div>
    )
  } else {
    return (
      <div>img empty</div>
    )
  }
 
}

export default Imghover;