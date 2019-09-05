import React from 'react';

const Image1 = ({pic1}) => {
  
  return (
    <div className="image">
      {/* {console.log('test img1',pic1.slice(2,3))} */}
        <img 
        className="mainImg" 
        src={pic1.slice(3,4)} 
        alt={pic1.slice(0,1)} 
        id="pic1"
        />
    </div>
  )
}

export default Image1;