import React from 'react';

const ListEntry = ({name, cost, image}) => {
 return (
  <div>
    <img 
    // src="https://images.lululemon.com/is/image/lululemon/LW5BV2S_1966_1?$image_carousel-lg_2x$"
    src={image[2]}
    alt={image[0]}
    style={{width: '234px', height: '281px'}}
    />
    <p>{name}</p>
    <p>{cost}</p>
  </div>
 )
}

export default ListEntry;
