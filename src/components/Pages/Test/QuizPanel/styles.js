import styled from 'styled-components';

export const QuizPanelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  .quiz-panel--question {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 200;
    text-align: left;
    color: var(--primary-text-color);
  }

  .quiz-panel--button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 15px;

    button {
      flex: 1;
    }

    @media (max-width: 639px) {
      flex-direction: column-reverse;

      button {
        width: 100%;
      }
    }
  }
`;