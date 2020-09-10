import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import OrderListItem from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { OrderTitle, Total, TotalPrice } from '../Style/ComponentStyle';
import { Context } from '../Functions/context';


const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;


const Order = () => {

  const { auth: { authentication, logIn }, orders: { orders, setOrders }, openItem: { setOpenItem }, orderConfirm: { setOpenOrderConfirm } } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  const deleteOrder = index => {
    const newOrders = orders.filter((item, i) => index !== i);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        { orders.length ? <OrderList>
          {orders.map((order, index) => <OrderListItem key={index} order={order} deleteOrder={deleteOrder} index={index} setOpenItem={setOpenItem}/>)}
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList> }
      </OrderContent>
      { orders.length ?
      <>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <Button onClick={() => {
          if(authentication) {
            setOpenOrderConfirm(true);
          } else {
            logIn();
          }
        }}>Оформить</Button>
      </> : ''}
    </OrderStyled>
  );
};

export default Order;
