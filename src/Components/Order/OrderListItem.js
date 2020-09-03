import React from 'react';
import styled from 'styled-components';
import trashImage from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const Topping = styled.p`
  display: flex;
  font-size: 10px;
  color: green;
`;

const OrderListItem = ({ order, deleteOrder, index }) => {

  const toppings = order.topping.filter(item => item.checked === true);

  return (
    <>
      <OrderItemStyled>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton id={order.name} onClick={() => deleteOrder(index)}/>
      </OrderItemStyled>
      {toppings.length !== 0 && toppings.map((item, i) => <Topping key={i}>{item.name}</Topping>)}
    </>
  );
};



export default OrderListItem;
