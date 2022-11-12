import React from 'react';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer className="header">
      <div className="header--wrapper flex items-center sm:justify-between justify-center p-10">
        <div className='header--left'>
          <img src='images/logo.svg' />
        </div>
        <div className='header--right'>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;