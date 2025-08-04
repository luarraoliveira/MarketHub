import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-aicockpit.svg";
import profileIcon from "../assets/profile-icon.svg";
import homeIcon from "../assets/home-icon.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  background-color: #323232;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  gap: 16px;
  text-decoration: none;
  color: inherit;
`;

const Logo = styled.img`
  width: 124px;
  height: 34px;
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 20px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 15px 7px 14px;
  border-radius: 50px;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.background};
  background: ${({ primary, theme }) =>
    primary ? theme.colors.background : theme.gradients.button};

  img {
    width: 18px;
    height: 18px;
  }
`;

const Header = () => {
  const location = useLocation();
  const isCadastro = location.pathname === "/cadastro";
  const isLogin = location.pathname === "/login";

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo src={logo} alt="AI.MarketHub Logo" />
        <LogoText>AI.MarketHub</LogoText>
      </LogoContainer>
      <NavContainer>
        {isCadastro ? (
          <NavButton to="/login">
            <img src={profileIcon} alt="Login" />
            <span>Login</span>
          </NavButton>
        ) : isLogin ? (
          <NavButton to="/cadastro">
            <img src={profileIcon} alt="Cadastro" />
            <span>Cadastro</span>
          </NavButton>
        ) : null}

        <NavButton to="/" primary>
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </NavButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
