import React from 'react';
import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {
  return (
    <div>
        Header
    </div>
  )
}

export default Header;