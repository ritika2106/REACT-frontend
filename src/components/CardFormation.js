import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function CardFormation({ imageSrc, title, price }) {
  return (
    <div className='card'>
      <img src={imageSrc} alt={title} />
      <h2 className='name'>{title}</h2>
      <AiOutlineShoppingCart className='icon'/>
      <p className='price'>${price}</p>
    </div>
  );
}

export default CardFormation;