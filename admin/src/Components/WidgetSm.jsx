import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
const WidgetSm = () => {
  return (
    <Container>
      <Title>New Members</Title>
      <WidgetList>
        <WidgetListItem>
          <WidgetUser>
          <Image
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <WidgetUserInfo>
            <WidgetUsername>Anna Keller</WidgetUsername>
            <WidgetUserJob>Software Engineer</WidgetUserJob>
          </WidgetUserInfo>
          </WidgetUser>
          <WidgetButton>
            <VisibilityIcon />
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetUser>
          <Image
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <WidgetUserInfo>
            <WidgetUsername>Anna Keller</WidgetUsername>
            <WidgetUserJob>Software Engineer</WidgetUserJob>
          </WidgetUserInfo>
          </WidgetUser>
          <WidgetButton>
            <VisibilityIcon />
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetUser>
          <Image
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <WidgetUserInfo>
            <WidgetUsername>Anna Keller</WidgetUsername>
            <WidgetUserJob>Software Engineer</WidgetUserJob>
          </WidgetUserInfo>
          </WidgetUser>
          <WidgetButton>
            <VisibilityIcon />
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetUser>
          <Image
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <WidgetUserInfo>
            <WidgetUsername>Anna Keller</WidgetUsername>
            <WidgetUserJob>Software Engineer</WidgetUserJob>
          </WidgetUserInfo>
          </WidgetUser>
          <WidgetButton>
            <VisibilityIcon />
            Display
          </WidgetButton>
        </WidgetListItem>

      </WidgetList>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
  padding: 1.2rem;
  margin-right: 1.2rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;
const WidgetList = styled.ul`
  list-style: none;
`;
const WidgetListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem 0;
`;
const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right:0.5rem;
`;

const WidgetUser = styled.div`
  display:flex;
  align-items:center;

`;

const WidgetUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetUsername = styled.span`
    font-weight:600;
`;
const WidgetUserJob = styled.span`
    font-weight:300;

`;
const WidgetButton = styled.button`
  display: flex;
  align-items:center;
  border:none;
  padding:0.3rem;
  border-radius:0.6rem;
  background-color:#eeeef7;
  color:#555;
  cursor: pointer;

  svg {
    font-size:1rem;
    margin-right:0.3rem;
  }

`;

export default WidgetSm;
