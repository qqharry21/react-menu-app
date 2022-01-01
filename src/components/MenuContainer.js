/** @format */

import React, { useState } from 'react';
import items from '../data';
import Categories from './Categories';
import Menu from './Menu';

function MenuContainer() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const allCategories = ['all', ...new Set(items.map(item => item.category))];

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter(item => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} allCategories={allCategories} />
      <Menu items={menuItems} />
    </section>
  );
}

export default MenuContainer;
