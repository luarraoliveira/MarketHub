import React from "react";
import styled from "styled-components";
import facebookIcon from "../../assets/facebook-icon.svg";
import googleIcon from "../../assets/logo_google.svg"; // Using one part of the logo for simplicity

const SocialButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid
    ${({ provider, theme }) =>
      provider === "google" ? theme.colors.google.border : "transparent"};
  background-color: ${({ provider, theme }) =>
    provider === "facebook" ? theme.colors.facebook : theme.colors.white};
  color: ${({ provider, theme }) =>
    provider === "facebook" ? theme.colors.white : theme.colors.google.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 240px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const SocialButton = ({ provider, children }) => {
  const icon = provider === "facebook" ? facebookIcon : googleIcon;

  return (
    <SocialButtonWrapper provider={provider}>
      <Icon src={icon} alt={`${provider} logo`} />
      <span>{children}</span>
    </SocialButtonWrapper>
  );
};

export default SocialButton;
