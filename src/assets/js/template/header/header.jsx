import React from 'react';
import logo from '../../../../assets/media/marvel.svg';
import Menu from '../menu/menu';


export default () => (
  <header className="header">
    <a href="#/" className="header__logo">
      <img src={logo} alt="" />
    </a>
    <Menu />
  </header>
);
