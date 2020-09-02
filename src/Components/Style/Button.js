import styled from 'styled-components';

export const Button = styled.button`
  background-color: #299B01;
  border: 2px solid #299B01;
  font-size: 21px;
  color: white;
  padding: 18px 0;
  width: 246px;
  transition: all 0.3s linear;
  margin: 0 auto;

  &:hover {
    background-color: transparent;
    color: #299B01;
  }

  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;
