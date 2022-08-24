import styled from "styled-components";
import Chart from "../Components/Chart";
import FeaturedInfo from "../Components/FeaturedInfo";
import WidgetLg from "../Components/WidgetLg";
import WidgetSm from "../Components/WidgetSm";
FeaturedInfo;
import { userData } from "../dummyData";

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid
      />
      <WidgetContainer>
        <WidgetSm />
        <WidgetLg />
      </WidgetContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
`;

const WidgetContainer = styled.div`
  display: flex;
  margin: 1.2rem;
`;

export default Home;
