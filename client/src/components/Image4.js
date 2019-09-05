import React from 'react';

const Image1 = ({pic4}) => {
  return (
    <div className="image" >
      {/* {console.log('test img1',pic4.slice(2,3))} */}
      <img 
      className="mainImg" 
      src={pic4.slice(3,4)} 
      alt={pic4.slice(0,1)} 
      id="pic4"
      />
    </div>
  )
}

export default Image1;