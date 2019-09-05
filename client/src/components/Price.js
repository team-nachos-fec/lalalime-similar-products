import React from 'react';

const Price = ({cost}) => {
  return (
    <div className="product-prices">
      <h2 className="product-cost">{cost}</h2>
    </div>
  )
}

export default Price;