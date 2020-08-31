import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px 0 37px;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const ButtonCount = styled.button`
  background-color: transparent;
`;



export function CountItem(counter) {

  const { count, setCount, onChange } = counter;

  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  )
}