import React, { useState } from 'react';
import Button from 'components/Core/Button';
import AnswerBar from 'components/Core/AnswerBar';
import { QuizPanelContainer } from './styles';

const QuizPanel = ({ question, answers, step, isLastStep, onNext, onPrev }) => {
  const [selAnswer, setSelAnswer] = useState(false);

  const handleAnswerSelect = (answerNum) => {
    setSelAnswer(answerNum);
  }

  return (
    <QuizPanelContainer className="quiz-panel--container">
      <div className="quiz-panel--wrapper">
        <p className="quiz-panel--question">{question}</p>
        <span className="block text-sm text-white text-left italic font-thin mt-[8px]">All questions are required</span>
        <div className="flex flex-col gap-3 mt-[15px]">
          {answers?.map((answer, index) => (
            <AnswerBar answer={answer} num={index} isSelected={selAnswer === index} onSelect={handleAnswerSelect} key={index}>{answer}</AnswerBar>
          ))}
        </div>
        <div className="quiz-panel--button-container">
          <Button onClick={onPrev} disabled={step === 0}>Previous</Button>
          <Button onClick={() => onNext(step, selAnswer)} disabled={selAnswer === false}>{`${isLastStep ? 'Show Result' : 'Next question'}`}</Button>
        </div>
      </div>
    </QuizPanelContainer>
  )
}

export default QuizPanel;