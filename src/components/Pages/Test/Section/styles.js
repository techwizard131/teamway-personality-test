import styled from 'styled-components';

export const TestSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .test-section--wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-center;
    padding: 120px 20px;
  }
  
  .test-section--info {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 100;
    color: var(--primary-text-color);
    text-align: center;
  }

  .test-section--main {
    width: 100%;
    max-width: 760px;
    height: 100%;
  }

  @media (max-width: 639px) {
    align-items: flex-start;

    .test-section--wrapper {
      padding: 140px 10px 90px;
    }
  }
`;