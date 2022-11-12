import React from 'react';
import styled from 'styled-components';

const Button = ({ children, className, ...otherProps }) => {
  return (
    <StyledButton className={`button primary-button ${className || ''}`} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 10px 20px;
  outline: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--primary-button-bg-color);
  border-color: var(--primary-button-bg-color);
  color: var(--primary-button-text-color);
  font-size: 20px;
  line-height: 1.5;
  font-weight: 200;
  box-shadow: #0000001A 0 3px 12px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  transition: var(--primary-transition);

  &:hover {
    filter: brightness(120%);
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      filter: none;
    }
  }
`;
