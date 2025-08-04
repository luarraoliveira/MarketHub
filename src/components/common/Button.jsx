import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/arrow-icon.svg";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 17px 7px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.button};
  width: 320px;
  height: 48px;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = ({ children }) => {
  return (
    <StyledButton>
      <img src={arrowIcon} alt="" />
      {children}
    </StyledButton>
  );
};

export default Button;
