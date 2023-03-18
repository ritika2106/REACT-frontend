import React from 'react';


function CardFormation({ imageSrc, title, price }) {
  return (
    <div className='card'>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}

export default CardFormation;