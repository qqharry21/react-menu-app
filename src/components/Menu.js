/** @format */

import React from 'react';

function Menu({ items }) {
  return (
    <div className='section-center'>
      {items.map((item, index) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={index} className='menu-item' id={id}>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>$ {price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
