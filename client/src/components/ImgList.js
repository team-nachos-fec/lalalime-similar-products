import React from 'react';
import Image1 from './Image1.js';
import Image2 from './Image2.js';
import Image3 from './Image3.js';
import Image4 from './Image4.js';

const ImgList = ({img}) => {
  if (img.length > 0) {
    return (
      <div className="imageList">
        {/* {console.log('pic1', img[0][0])} */}
        <Image1 pic1={img[0][0]}/>
        <Image2 pic2={img[1][1]}/>
        <Image3 pic3={img[2][2]}/>
        <Image4 pic4={img[3][3]}/>
      </div>
    )
  } else {
    return (
      <div>img empty</div>
    )
  }
 
}

export default ImgList;

