import React from 'react';
import { useRouter } from 'next/router';
import Button from 'components/Core/Button';
import { LandingSectionContainer } from './styles';

const LandingSection = () => {
  const router = useRouter();

  return (
    <LandingSectionContainer className="home-content--container">
      <div className="h-full flex flex-col justify-center items-center px-10">
        <p className="text-4xl text-white text-center font-thin mb-8">Are you an introvert or an extrovert?</p>
        <img className="w-[30rem] opacity-75 drop-shadow-2xl" src="images/hero.webp" />
        <Button className="min-w-[15rem] font-thinm mt-8" onClick={() => router.push(`/test`)}>Find it out</Button>
      </div>
    </LandingSectionContainer>
  )
}

export default LandingSection;