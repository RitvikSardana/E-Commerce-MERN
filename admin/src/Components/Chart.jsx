import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Chart = ({ title, data, dataKey, grid }) => {


  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 1.2rem;
  padding: 1.2rem;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
`;

const ChartTitle = styled.h3`
  margin-bottom: 1.2rem;
`;

export default Chart;
