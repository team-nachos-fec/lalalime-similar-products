import React from 'react';
import ListEntry from './ListEntry.js';

const List = ({title, price, img}) => {
  return (
    <div>
      {img.map((image, i) => {
        return <div><ListEntry image={image} key={i}/></div>
      })}
      {/* <p> */}
        {title.map((name, j) => {
          return <div><ListEntry name={name} key={j}/></div>
        })}
      {/* </p>
      <p> */}
        {price.map((cost, k) => {
          return <div><ListEntry cost={cost} key={k}/></div>
        })}
      {/* </p> */}
    </div>
  )
}

export default List;