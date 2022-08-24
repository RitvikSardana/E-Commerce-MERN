import React from "react";
import styled from "styled-components";

const WidgetLg = () => {
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
        <TableRow>
          <TableDataImage>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </TableDataImage>
          <TableDataDate>2 Jun 2022</TableDataDate>
          <TableDataAmount>₹5,000.00</TableDataAmount>
          <TableDataStatus>
            {/* Approved Pending Declined */}
            <Button type="Approved">Approved</Button>
          </TableDataStatus>
        </TableRow>
        <TableRow>
          <TableDataImage>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </TableDataImage>
          <TableDataDate>2 Jun 2022</TableDataDate>
          <TableDataAmount>₹5,000.00</TableDataAmount>
          <TableDataStatus>
            {/* Approved Pending Declined */}
            <Button type="Declined">Declined</Button>
          </TableDataStatus>
        </TableRow>
        <TableRow>
          <TableDataImage>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </TableDataImage>
          <TableDataDate>2 Jun 2022</TableDataDate>
          <TableDataAmount>₹5,000.00</TableDataAmount>
          <TableDataStatus>
            {/* Approved Pending Declined */}
            <Button type="Approved">Approved</Button>
          </TableDataStatus>
        </TableRow>
        <TableRow>
          <TableDataImage>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </TableDataImage>
          <TableDataDate>2 Jun 2022</TableDataDate>
          <TableDataAmount>₹5,000.00</TableDataAmount>
          <TableDataStatus>
            {/* Approved Pending Declined */}
            <Button type="Pending">Pending</Button>
          </TableDataStatus>
        </TableRow>
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
    props.type === "Approved"
      ? "#e5faf2"
      : props.type === "Declined"
      ? "#fff0f1"
      : "#ebf1fe"};
  color: ${(props) =>
    props.type === "Approved"
      ? "#3bb077"
      : props.type === "Declined"
      ? "#d95087"
      : "#2a7ade"};
`;

export default WidgetLg;
