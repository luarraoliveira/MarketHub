import React from "react";
import styled from "styled-components";
import asteriskIcon from "../../assets/asterisk-icon.svg";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

const Asterisk = styled.img`
  width: 8px;
  height: 8px;
`;

const StyledInput = styled.input`
  padding: 7px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.medium};
  }
`;

const Input = ({ label, required, ...props }) => {
  return (
    <InputWrapper>
      <LabelContainer>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        {required && <Asterisk src={asteriskIcon} alt="Required" />}
      </LabelContainer>
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default Input;
