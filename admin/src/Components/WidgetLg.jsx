import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import {format} from 'timeago.js'

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        let {
          data: { data },
        } = res;
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
    return () => {};
  }, []);

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <TableRow>
          <TableHeading>Customer</TableHeading>
          <TableHeading>Date</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Status</TableHeading>
        </TableRow>
        {orders.map((order) => (
          <TableRow key = {order._id}>
            <TableDataImage>
              <Name>{order.userId}</Name>
            </TableDataImage>
            <TableDataDate>{format(order.createdAt)}</TableDataDate>
            <TableDataAmount>₹ { order.amount }</TableDataAmount>
            <TableDataStatus>
              {/* Approved Pending Declined */}
              <Button type={'order.status'}>{order.status}</Button>
            </TableDataStatus>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
};
const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
  padding: 1.2rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 1.2rem;
`;
const TableRow = styled.tr``;
const TableHeading = styled.th`
  text-align: left;
`;
const TableDataImage = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.3rem;
`;
const Name = styled.span``;
const TableDataDate = styled.td`
  font-weight: 300;
`;
const TableDataAmount = styled.td`
  font-weight: 300;
`;
const TableDataStatus = styled.td``;
const Button = styled.button`
  padding: 0.4rem;
  border: none;
  border-radius: 0.6rem;
  background-color: ${(props) =>
    props.type === "approved"
      ? "#e5faf2"
      : props.type === "declined"
      ? "#fff0f1"
      : "#ebf1fe"};
  color: ${(props) =>
    props.type === "approved"
      ? "#3bb077"
      : props.type === "declined"
      ? "#d95087"
      : "#2a7ade"};
`;

export default WidgetLg;
