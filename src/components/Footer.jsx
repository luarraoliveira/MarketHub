import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 48px;
  background-color: #323232;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 AI.COCKPIT. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
