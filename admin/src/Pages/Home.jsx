import { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "../Components/Chart";
import FeaturedInfo from "../Components/FeaturedInfo";
import WidgetLg from "../Components/WidgetLg";
import WidgetSm from "../Components/WidgetSm";
FeaturedInfo;
import { userData } from "../dummyData";
import { userRequest } from "../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        let {
          data: { data },
        } = res;
        data.map(item=>{
          setUserStats(prev => [
            ...prev,
            {name:MONTHS[item._id-1],"Active User" : item.total}
          ])
        })
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
    
    return () => {};
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userStats}
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
