import React from 'react';

const Image1 = ({pic1}) => {
  
  return (
    <div className="image">
      {/* {console.log('test img1',pic1.slice(2,3))} */}
      <a href="#" >
        <img 
        className="mainImg" 
        src={pic1.slice(3,4)} 
        alt={pic1.slice(0,1)} 
        />
      </a>
    </div>
  )
}

export default Image1;