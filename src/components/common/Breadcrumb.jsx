import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import ChevronIcon from "../../assets/chevron-icon.svg";

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  width: 100%;
  max-width: 940px;
`;

const BreadcrumbContent = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 0;
  align-items: center;
`;

const BreadcrumbItem = styled(Link)`
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  color: ${theme.colors.gray.dark};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbText = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.primary};
`;

const Chevron = styled.img`
  width: 10px;
  height: 10px;
`;

const Breadcrumb = ({ items }) => (
  <BreadcrumbContainer>
    <BreadcrumbContent>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <BreadcrumbItem to={item.link}>{item.label}</BreadcrumbItem>
          ) : (
            <BreadcrumbText>{item.label}</BreadcrumbText>
          )}
          {index < items.length - 1 && (
            <Chevron src={ChevronIcon} alt="Chevron" />
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContent>
  </BreadcrumbContainer>
);

export default Breadcrumb;
