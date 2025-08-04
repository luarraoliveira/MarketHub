import React from "react";
import styled from "styled-components";
import CheckmarkIcon from "../../assets/checkmark-icon-white.svg";

const SelectorContainer = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background-color: #f7f7f7;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid #b1b1b1;
  background-color: transparent;

  &.active {
    background-color: #ff5500;
    border-color: #ff5500;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const UserTypeSelector = ({ selectedType, onTypeChange }) => {
  return (
    <SelectorContainer>
      <Option onClick={() => onTypeChange("comprador")}>
        <Checkbox className={selectedType === "comprador" ? "active" : ""}>
          {selectedType === "comprador" && (
            <img src={CheckmarkIcon} alt="Selected" />
          )}
        </Checkbox>
        <Label>Comprador</Label>
      </Option>
      <Option onClick={() => onTypeChange("vendedor")}>
        <Checkbox className={selectedType === "vendedor" ? "active" : ""}>
          {selectedType === "vendedor" && (
            <img src={CheckmarkIcon} alt="Selected" />
          )}
        </Checkbox>
        <Label>Vendedor</Label>
      </Option>
    </SelectorContainer>
  );
};

export default UserTypeSelector;
