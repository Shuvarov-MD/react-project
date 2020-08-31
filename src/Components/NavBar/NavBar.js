import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 20px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 16px;
  line-height: 19px;
`;


const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MRDonald’s</H1>
    </Logo>
      <Login><img src={loginImg} alt="login"/>войти</Login>
  </NavBarStyled>
);

export default NavBar;