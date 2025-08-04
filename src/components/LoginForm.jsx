import React, { useState } from "react";
import styled from "styled-components";
import Input from "./common/Input.jsx";
import Button from "./common/Button.jsx";
import SocialButton from "./common/SocialButton.jsx";
import CadastroCheckboxForm from "../components/CadastroCheckboxForm";

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
  align-items: center;
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

const ProfileSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: 50px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 14px;
  height: 14px;
  border: 2px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 2px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.accent : theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: ${({ checked }) => (checked ? "block" : "none")};
    width: 9px;
    height: 8px;
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
  const [userType, setUserType] = useState("vendedor");

  return (
    <FormContainer>
      <TitleContainer>
        <Title>Fazer Login</Title>
        <CadastroCheckboxForm />
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

      <Button>
        <a
          href="/cadastro"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Cadastrar
        </a>
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
