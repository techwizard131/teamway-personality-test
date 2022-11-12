import React from 'react';
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <p className="w-full flex justify-center items-center py-4 text-lg font-extralight">By&nbsp;<img src="images/icon/love.svg" />&nbsp;<a className="underline text-fuchsia-300" href="mailto:williamliu131216@gmail.com">William Liu</a></p>
    </FooterContainer>
  )
}

export default Footer;