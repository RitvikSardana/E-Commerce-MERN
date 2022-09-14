import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/userSlice";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>RITVIK.</Logo>
          </Link>
        </Center>
        <Right>
          {!user._id ? (
            <>
              <MenuItem>REGISTER</MenuItem>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>Hello, {user.username} </MenuItem>
              <MenuItem onClick={logoutHandler}>LOGOUT</MenuItem>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  input:focus {
    outline: none;
  }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

export default Navbar;
