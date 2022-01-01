/** @format */

import React from 'react';

function Categories({ filterItems, allCategories }) {
  return (
    <div className='btn-container'>
      {allCategories.map((category, index) => (
        <button
          className='filter-btn'
          type='button'
          key={index}
          onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
