import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroForm from "../components/CadastroForm";
import CadastroCheckboxForm from "../components/CadastroCheckboxForm";
import Breadcrumb from "../components/common/Breadcrumb";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e8e8e8;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 48px 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 940px;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

const Cadastro = () => {
  const breadcrumbItems = [
    { label: "AI.MarketHub", link: "/" },
    { label: "Login", link: "/login" },
    { label: "Fazer Cadastro", link: "/cadastro" },
  ];

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Breadcrumb items={breadcrumbItems} />
        <FormWrapper>
          <FormHeader>
            <Title>Fazer Cadastro</Title>
            <CadastroCheckboxForm />
          </FormHeader>
          <CadastroForm />
        </FormWrapper>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Cadastro;
