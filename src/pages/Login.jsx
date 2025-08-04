import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Breadcrumb from "../components/common/Breadcrumb.jsx";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 64px 0;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const LoginPage = () => {
  const breadcrumbItems = [
    { label: "AI.MarketHub", link: "/" },
    { label: "Login", link: "" },
  ];

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Breadcrumb items={breadcrumbItems} />
        <LoginForm />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default LoginPage;
