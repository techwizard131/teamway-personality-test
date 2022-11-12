import React from 'react';
import Image from 'next/image';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer className="header">
      <div className="header--wrapper flex items-center sm:justify-between justify-center p-10">
        <div className='header--left'>
          <Image src='/images/logo.svg' width={174} height={32} alt="logo" />
        </div>
        <div className='header--right'>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;