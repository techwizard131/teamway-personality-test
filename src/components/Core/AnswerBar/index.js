import React from 'react';
import styled from 'styled-components';

const AnswerBar = ({ num, answer, isSelected, onSelect }) => {
  return (
    <AnswerBarContainer className={`answer-bar ${isSelected ? 'answer-bar--selected' : ''}`} onClick={() => onSelect(num)}>
      <span>{String.fromCharCode(65 + num)}</span>
      <label>{answer}</label>
    </AnswerBarContainer>
  );
};

export default AnswerBar;

const AnswerBarContainer = styled.div`
  cursor: pointer;
  background-color: rgba(255,255,255,.03);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
  cursor: pointer;
  opacity: 1;
  padding: 6px;
  height: 100%;
  border-radius: 4px;
  position: relative;
  transition: var(--primary-transition);

  span {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 200;
    color: var(--primary-text-color);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,.1);
    border-radius: 2px;
  }

  label {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 200;
    color: var(--primary-text-color);
    cursor: pointer;
    padding: 8px 20px 8px 50px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 42px;
  }

  &:hover {
    background-color: rgba(255,255,255,.1);
    box-shadow: inset 0 0 0 2px rgba(255,255,255,.7);
  }

  &.answer-bar--selected {
    background-color: rgba(255,255,255,.15);
    box-shadow: inset 0 0 0 2px rgba(255,255,255,1);

    span {
      box-shadow: 0 0 4px 1px rgba(255,255,255,1);
    }
  }
`;
