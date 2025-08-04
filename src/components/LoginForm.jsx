import React, { useState } from "react";
import styled from "styled-components";
import Input from "./common/Input.jsx";
import SocialButton from "./common/SocialButton.jsx";
import UserTypeSelector from "./common/UserTypeSelector.jsx";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/arrow-icon-white.svg";
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 48px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 940px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 32px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0;
  max-width: 700px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavButton = styled(Link)`
  gap: 8px;
  padding: 6px 15px 7px 14px;
  border-radius: 50px;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.button};
  width: 100%;
  max-width: 320px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 336px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: center;
`;

const LoginForm = () => {
  const [userType, setUserType] = useState("comprador");

  return (
    <FormContainer>
      <TitleContainer>
        <Title>Fazer Login</Title>
        <UserTypeSelector selectedType={userType} onTypeChange={setUserType} />
      </TitleContainer>
      <Form>
        <Input
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="e-mail@exemplo.com.br"
          required
        />
        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          placeholder="123456"
          required
        />
      </Form>

      <SocialLoginContainer>
        <SocialButton provider="facebook">Continuar com Facebook</SocialButton>
        <SocialButton provider="google">Continuar com Google</SocialButton>
      </SocialLoginContainer>

      <NavButton to="/cadastro" primary>
        <img src={ArrowIcon} alt="Home" />
        <span>Cadastrar</span>
      </NavButton>
    </FormContainer>
  );
};

export default LoginForm;
