import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { userRequest } from "../requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentageChange, setPercentageChange] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        const {
          data: { data },
        } = res;
        setIncome(data.sort((a, b) => a._id - b._id));
        const change =
          ((data[data.length - 1].total - data[data.length - 2].total) /
            data[data.length - 2].total) *
          100;
        setPercentageChange(change);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);


  return (
    <Container>
      {/* Revenue */}
      <FeatureItem>
        <FeatureTitle>Revenue</FeatureTitle>
        <FeatureMoneyInfoContainer>
          <FeatureMoney>₹{income[income.length - 1]?.total}</FeatureMoney>
          <FeatureMoneyRate sign={percentageChange < 0 ? "negative" :"positive"}>
            {Math.ceil(percentageChange*100)/100}%
            {percentageChange < 0 ? <ArrowDownwardIcon /> :<ArrowUpwardIcon />}
          </FeatureMoneyRate>
        </FeatureMoneyInfoContainer>
        <FeatureComparison> Compared to Last Month </FeatureComparison>
      </FeatureItem>

      
      <FeatureItem>
        <FeatureTitle>Sales</FeatureTitle>
        <FeatureMoneyInfoContainer>
          <FeatureMoney>₹4,415</FeatureMoney>
          <FeatureMoneyRate sign="negative">
            -1.4 <ArrowDownwardIcon />
          </FeatureMoneyRate>
        </FeatureMoneyInfoContainer>
        <FeatureComparison> Compared to Last Month </FeatureComparison>
      </FeatureItem>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const FeatureItem = styled.div`
  flex: 1;
  /* border: 2px solid black; */
  padding: 2rem;
  margin: 0 0.9rem;
  border-radius: 0.6rem;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
`;

const FeatureTitle = styled.span`
  font-size: 1.2rem;
`;

const FeatureMoneyInfoContainer = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 0.6rem 0;
`;

const FeatureMoney = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

const FeatureMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1.2rem;

  svg {
    font-size: 0.9rem;
    margin-left: 0.2rem;
    color: ${(props) => (props.sign === "negative" ? "red" : "green")};
  }
`;

const FeatureComparison = styled.span`
  font-size: 1rem;
  color: gray;
`;

export default FeaturedInfo;
