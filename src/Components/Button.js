import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  background-color: #299B01;
  border: 2px solid #299B01;
  font-size: 21px;
  color: white;
  padding: 18px 0;
  width: 246px;
  transition: all 0.3s linear;

  &:hover {
    background-color: transparent;
    color: #299B01;
  }
`;

const Button = ({ text }) => (
  <AddButton>{text}</AddButton>
);

export default Button;
