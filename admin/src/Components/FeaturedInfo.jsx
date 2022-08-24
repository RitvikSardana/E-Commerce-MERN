import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const FeaturedInfo = () => {
  return (
    <Container>
      <FeatureItem>
        <FeatureTitle>Revenue</FeatureTitle>
        <FeatureMoneyInfoContainer>
          <FeatureMoney>₹2,415</FeatureMoney>
          <FeatureMoneyRate sign="negative">
            -11.4 <ArrowDownwardIcon />
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
      <FeatureItem>
        <FeatureTitle>Cost</FeatureTitle>
        <FeatureMoneyInfoContainer>
          <FeatureMoney>₹2,415</FeatureMoney>
          <FeatureMoneyRate>
            +11.4 <ArrowUpwardIcon />
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

  svg{
    font-size:0.9rem;
    margin-left:0.2rem;
    color: ${(props)=>props.sign === 'negative' ?"red" :"green"}
  }

`;

const FeatureComparison = styled.span`
    font-size:1rem;
    color:gray;
`;

export default FeaturedInfo;
