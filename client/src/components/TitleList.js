import React from 'react';
import Title from './Title.js';

const TitleList = ({title}) => {
  return (
    <div class="title">
      {title.map((name, i) => (
       <Title name={name} key={i}/>
     ))}
    </div>
  )
}

export default TitleList;