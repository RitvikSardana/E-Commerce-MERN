import styled from "styled-components";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Badge } from "@mui/material";
const Navbar = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Left>
          <Logo>ADMIN E-Commerce</Logo>
        </Left>
        <Right>
          <IconContainer isBadge="true">
            <Badge
              badgeContent="2"
              color="primary"
              showZero
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconContainer>
          <IconContainer>
            <LanguageIcon />
          </IconContainer>
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
          <IconContainer>
            <Avatar sx={{ width: 30, height: 30 }} alt="" src="" />
          </IconContainer>
        </Right>
      </ContainerWrapper>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 50;
  background-color: #fff;
  position:sticky;
  top:0;
  z-index:999;
`;
const ContainerWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const IconContainer = styled.div`
  font-size: ${(props) => (props.isBadge === "true" ? "14px" : "4px")};
  margin-right: 0.6rem;
  color: #555;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Navbar;
