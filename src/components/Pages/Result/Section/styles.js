import styled from 'styled-components';

export const ResultSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .result-section--wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-center;
    padding: 120px 20px;
    max-width: 760px;
  }

  h2, h4, p {
    color: var(--primary-text-color);
  }

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 200;
    color: var(--primary-text-color);
    margin-top: 30px;
    text-align: left;
  }
`;