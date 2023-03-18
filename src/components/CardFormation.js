import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


function CardFormation({ imageSrc, title, price, addToCart }) {
  return (
    <div className='card'>
      <img src={imageSrc} alt={title} />
      <h2 className='name'>{title}</h2>
      <span className='icon' onClick={addToCart}><AiOutlineShoppingCart/>
      </span>
      <p className='price'>${price}</p>
    </div>
  );
}

export default CardFormation;