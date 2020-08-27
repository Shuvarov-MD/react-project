import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 43px;
  flex: 1 0 auto;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Price = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px 0 37px;
  font-size: 30px;
  font-family: Pacifico;
  font-style: normal;
  font-weight: normal;
`;


const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if(!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Description>
          <Price>
            <span>{openItem.name}</span>
            <span>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</span>
          </Price>
          <Button text='Добавить'/>
        </Description>
      </Modal>
    </Overlay>
  );
};



export default ModalItem;