import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 16px;
  gap: 24px;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #222;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const CheckCircle = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 2px solid ${({ checked }) => (checked ? "#F05223" : "#222")};
  background-color: ${({ checked }) => (checked ? "#F05223" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 12px;
    height: 12px;
    fill: white;
    display: ${({ checked }) => (checked ? "block" : "none")};
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.285 6.708l-11.14 11.14-5.431-5.431 1.415-1.415 4.016 4.016 9.726-9.726z" />
  </svg>
);

const CadastroCheckboxForm = () => {
  const [selected, setSelected] = useState("vendedor");

  return (
    <FormContainer>
      <RadioGroup>
        <RadioButton>
          <HiddenRadio
            type="radio"
            name="perfil"
            value="comprador"
            checked={selected === "comprador"}
            onChange={() => setSelected("comprador")}
          />
          <CheckCircle checked={selected === "comprador"}>
            <CheckIcon />
          </CheckCircle>
          Comprador
        </RadioButton>

        <RadioButton>
          <HiddenRadio
            type="radio"
            name="perfil"
            value="vendedor"
            checked={selected === "vendedor"}
            onChange={() => setSelected("vendedor")}
          />
          <CheckCircle checked={selected === "vendedor"}>
            <CheckIcon />
          </CheckCircle>
          Vendedor
        </RadioButton>
      </RadioGroup>
    </FormContainer>
  );
};

export default CadastroCheckboxForm;
