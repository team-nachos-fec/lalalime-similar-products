import React from 'react';

const Image1 = ({pic4}) => {
  return (
    <div class="image">
      {/* {console.log('test img1',pic4.slice(2,3))} */}
      <a href="#" onclick="return false">
        <img 
        class="mainImg" 
        src={pic4.slice(3,4)} 
        alt={pic4.slice(0,1)} 
        />
      </a>
    </div>
  )
}

export default Image1;