import React from "react";
import styled from "styled-components";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to='/newUser'>
        <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserInfo>
          <UserTopInfo>
            <UserImage
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <UserJobInfo>
              <Username>Anna Becker</Username>
              <UserTitleJob>Software Engineer</UserTitleJob>
            </UserJobInfo>
          </UserTopInfo>
          <UserBottomInfo>
            <UserAccountTitle>Account Details</UserAccountTitle>

            <UserShowInfo>
              <PermIdentityOutlinedIcon />
              <UserTitleInfo>annaBeck99</UserTitleInfo>
            </UserShowInfo>

            <UserShowInfo>
              <CalendarTodayOutlinedIcon />
              <UserTitleInfo>10.12.1999</UserTitleInfo>
            </UserShowInfo>
            <UserAccountTitle>Contact Details</UserAccountTitle>
            <UserShowInfo>
              <PhoneAndroidOutlinedIcon />
              <UserTitleInfo>+91 98920019090</UserTitleInfo>
            </UserShowInfo>

            <UserShowInfo>
              <MailOutlineOutlinedIcon />
              <UserTitleInfo>annabeck99@gmail.com</UserTitleInfo>
            </UserShowInfo>

            <UserShowInfo>
              <LocationSearchingOutlinedIcon />
              <UserTitleInfo>Delhi, India</UserTitleInfo>
            </UserShowInfo>
          </UserBottomInfo>
        </UserInfo>

        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserUpdateLabel>Username</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="annabeck99" />
              </UserUpdateItem>

              <UserUpdateItem>
                <UserUpdateLabel>Full Name</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="Anna Becker" />
              </UserUpdateItem>

              <UserUpdateItem>
                <UserUpdateLabel>Email</UserUpdateLabel>
                <UserUpdateInput
                  type="email"
                  placeholder="annabeck99@gmail.com"
                />
              </UserUpdateItem>

              <UserUpdateItem>
                <UserUpdateLabel>Phone</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="+91 98920019090" />
              </UserUpdateItem>

              <UserUpdateItem>
                <UserUpdateLabel>Address</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="Delhi, India" />
              </UserUpdateItem>
            </UserUpdateLeft>

            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImage
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <UserUpdateLabel htmlFor="file">
                  <PublishOutlinedIcon />
                </UserUpdateLabel>
                <UserUpdateInput type="file" id="file" location />
              </UserUpdateUpload>
              <UserUpdateButton onClick={(e)=>e.preventDefault()}>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};



const Container = styled.div`
  flex: 4;
  padding: 1.2rem;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;

const UserAddButton = styled.button`
  width: 5rem;
  border: none;
  padding: 0.2rem;
  cursor: pointer;
  background-color: teal;
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  /* @media screen and (max-width: 600px) {
    flex-direction:column;
  } */
`;
const UserInfo = styled.div`
  flex: 1;
  padding: 1.2rem;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
`;

const UserTitleJob = styled.span`
  font-weight: 300;
`;

const UserTopInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const UserJobInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-weight: 600;
`;

const UserBottomInfo = styled.div`
  margin-top: 0.6rem;
`;

const UserAccountTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const UserShowInfo = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;

  svg {
    font-size: 1rem;
  }
`;

const UserTitleInfo = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: rgb(175, 170, 170);
  margin-left: 0.5rem;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 1.2rem;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
  margin-left: 1.2rem;
`;

const UserUpdateTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const UserUpdateLeft = styled.div``;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
`;

const UserUpdateLabel = styled.label`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const UserUpdateInput = styled.input`
  display: ${(props) => props.location && "none"};
  border: none;
  width: 250px;
  border-bottom: 1px solid gray;
  height: 1.9rem;

  &:focus{
    outline:none;
  }

`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const UserUpdateImage = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 0.6rem;
`;

const UserUpdateButton = styled.button`
    border:none;
    border-radius:0.3rem;
    padding:5px;
    cursor: pointer;
    background-color:darkblue;
    color:white;
    font-weight:bold;
`;

export default User;
