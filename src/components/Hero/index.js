import React from 'react';
import { HeroContainer } from './styles';

const Hero = () => {
  return (
    <HeroContainer className="home-hero--container">
      <div>
        <img src="images/hero.webp" />
        <p>Are you an introvert or an extrovert?</p>
      </div>
    </HeroContainer>
  )
}

export default Hero;