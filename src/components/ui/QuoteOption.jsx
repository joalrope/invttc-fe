import React from 'react';
import { Link } from 'react-router-dom';

export const QuoteOption = () => {
  return (
    <li className='nav-item'>
      <Link to='/quote' className='nav-link'>
        <span className='navbar-item'>Cotizacion</span>
      </Link>
    </li>
  );
};
