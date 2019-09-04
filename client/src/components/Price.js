import React from 'react';

const Price = ({cost}) => {
  return (
    <div class="product-prices">
      <h2 class="product-cost">{cost}</h2>
    </div>
  )
}

export default Price;