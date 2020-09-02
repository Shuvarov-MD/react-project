import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-rigth: 5px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices({ openItem, choice, changeChoces }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio type="radio" name="choises" value={item} checked={choice === item} onChange={changeChoces}/>
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}