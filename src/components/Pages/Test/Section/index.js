import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from 'react-query';
import Slider from 'react-slick';
import QuizPanel from '../QuizPanel';
import { fetchQuiz, submitResult } from 'services/quiz';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestSectionContainer } from './styles';

const TestSection = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answerResults, setAnswerResults] = useState([]);
  const {
    isLoading,
    isError,
    error,
    data: questionData,
  } = useQuery('fetchQuiz', () => fetchQuiz());
  const mutation = useMutation(
    (values) => submitResult(values),
    {
      onSuccess: (data) => {
        router.push(`/result?personality=${data.personality}`);
      },
    },
  );

  let slider;
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    touchMove: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    accessibility: true,
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleNextStep = (step, result) => {
    const newResults = [...answerResults];
    newResults[step] = result;
    setAnswerResults(newResults);

    if (questionData?.length > 0 && step < questionData.length - 1) {
      setStep(prevStep => prevStep + 1);
    } else if (step === questionData.length - 1) {
      mutation.mutate(newResults);
    }
  }

  useEffect(() => {
    if (slider && questionData) {
      slider.slickGoTo(step);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <TestSectionContainer className="test-section--container">
      <div className="test-section--wrapper">
        {isLoading && <p className="test-section--info">Loading...</p>}
        {isError && <p className="test-section--info">{error.message}</p>}
        {!isLoading && !isError && questionData?.length > 0 && (
          <div className="test-section--main">
            <span className="text-sm text-white text-left font-extralight px-[10px]">Question {step + 1} / {questionData.length}</span>
            <Slider ref={c => (slider = c)} {...sliderSettings}>
              {
                questionData?.map((quiz, index) => (
                  <QuizPanel
                    {...quiz}
                    step={index}
                    isLastStep={index === questionData.length - 1}
                    onPrev={handlePrevStep}
                    onNext={handleNextStep}
                    key={index}
                  />
                ))
              }
            </Slider>
          </div>
        )}
      </div>
    </TestSectionContainer>
  )
}

export default TestSection;