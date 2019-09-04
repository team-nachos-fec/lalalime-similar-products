import React from 'react';

const Title = ({name}) => {
  return (
    <div class="product-titles">
      <a href="#" onclick="return false">
        <span class="product-name">{name}</span>
      </a>
    </div>
  )
}

export default Title;