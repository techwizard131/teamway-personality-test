import React from 'react';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer className="header">
      <div className="header--wrapper">
        <div className='header--left'>
          <img src='https://app.teamway.io/assets/images/logo.svg' />
        </div>
        <div className='header--right'>
          
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;