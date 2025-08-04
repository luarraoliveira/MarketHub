import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompradorForm from "../components/CompradorForm";
import VendedorForm from "../components/VendedorForm";
import UserTypeSelector from "../components/common/UserTypeSelector";
import Breadcrumb from "../components/common/Breadcrumb";

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  margin-bottom: 24px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e8e8e8;
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
`;

const Cadastro = () => {
  const [userType, setUserType] = useState("comprador");

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
            <UserTypeSelector
              selectedType={userType}
              onTypeChange={setUserType}
            />
          </FormHeader>
          {userType === "comprador" ? <CompradorForm /> : <VendedorForm />}
        </FormWrapper>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Cadastro;
