import logo from '../../../../assets/media/marvel.svg';

import React from 'react';
import Menu from '../menu/menu';


export default props => (
  <header className="header">
    <a href="#/" className="header__logo">
      <img src={logo} alt="" />
    </a>
    <Menu />
  </header>
);
