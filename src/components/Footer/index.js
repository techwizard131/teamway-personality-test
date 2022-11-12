import React from 'react';
import Image from 'next/image';
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <p className="w-full flex justify-center items-center py-4 text-lg font-extralight">By&nbsp;<Image src="/images/icon/love.svg" width={20} height={20} alt="footer-icon" />&nbsp;<a className="underline text-fuchsia-300" href="mailto:williamliu131216@gmail.com">William Liu</a></p>
    </FooterContainer>
  )
}

export default Footer;