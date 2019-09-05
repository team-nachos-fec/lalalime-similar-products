import React from 'react';
import Price from './Price.js';

const PriceList = ({price}) => {
  return (
    <div className="price">
      {price.map((cost, i) => (
       <Price cost={cost} key={i}/>
      ))}
    </div>
  )
}

export default PriceList;