import React from 'react';

const Title = ({name}) => {
  return (
    <div className="product-titles">
      <a href="#">
        <span className="product-name">{name}</span>
      </a>
    </div>
  )
}

export default Title;