import React from "react";
import styled from "styled-components";
import IconDark from "../assets/asterisk-icon-dark.svg";
import ArrowRight from "../assets/arrow-icon-white.svg";
import GoogleIcon from "../assets/google-icon-color.svg";
import FacebookIcon from "../assets/assets/facebook-icon-white.svg";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 700px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 12px;
  color: #464646;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const Asterisk = styled.img`
  width: 8px;
  height: 8px;
  margin-left: 4px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  font-size: 14px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &.facebook {
    background-color: #1877f2;
    color: white;
  }

  &.google {
    background-color: white;
    color: rgba(0, 0, 0, 0.54);
    border-color: #9f9f9f;
  }
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 19px;
  margin-top: 24px;
  justify-content: center;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 17px 7px;
  width: 320px;
  height: 48px;
  background: linear-gradient(to right, #ff5500, #df897c);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  align-self: center;
`;

const CadastroForm = () => {
  return (
    <FormContainer>
      <FormRow></FormRow>
      <FormRow>
        <FormGroup>
          <Label htmlFor="nome">
            Nome Completo <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="text" id="nome" placeholder="Maria Silva" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cpf">
            CPF <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="text" id="cpf" placeholder="000.000.000 - 00" />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Label htmlFor="email">
            E-mail <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="email" id="email" placeholder="e-mail@exemplo.com.br" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="celular">
            Celular <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="text" id="celular" placeholder="55 99 9999 - 9999" />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Label htmlFor="razaoSocial">
            Razão Social <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="text" id="razaoSocial" placeholder="99999999" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cnpj">
            CNPJ <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="text" id="cnpj" placeholder="9999.9999.9999" />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Label htmlFor="senha">
            Senha <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="password" id="senha" placeholder="123456" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmarSenha">
            Confirmar Senha <Asterisk src={IconDark} alt="Obrigatório" />
          </Label>
          <Input type="password" id="confirmarSenha" placeholder="123456" />
        </FormGroup>
      </FormRow>
      <SocialButtonsContainer>
        <SocialButton className="facebook">
          <img src={FacebookIcon} alt="Facebook" />
          Continuar com Facebook
        </SocialButton>
        <SocialButton className="google">
          <img src={GoogleIcon} alt="Google" />
          Continuar com Google
        </SocialButton>
      </SocialButtonsContainer>

      <SubmitButton>
        <img src={ArrowRight} alt="Cadastrar" />
        Cadastrar
      </SubmitButton>
    </FormContainer>
  );
};

export default CadastroForm;
