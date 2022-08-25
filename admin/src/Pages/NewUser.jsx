import styled from "styled-components";
import React from "react";

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserFormItem>
          <NewUserFormLabel>Username</NewUserFormLabel>
          <NewUserFormInput placeholder="John"></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Full Name</NewUserFormLabel>
          <NewUserFormInput placeholder="John Cartel"></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Email</NewUserFormLabel>
          <NewUserFormInput type="email" placeholder="john99@gmail.com" />
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Password</NewUserFormLabel>
          <NewUserFormInput type="password" placeholder="password" />
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Phone</NewUserFormLabel>
          <NewUserFormInput placeholder="+91 8922211450" />
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Address</NewUserFormLabel>
          <NewUserFormInput placeholder="Delhi,India" />
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel heading>Gender</NewUserFormLabel>
          <NewUserGender>
            <NewUserFormGenderInput
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <NewUserFormLabel for="male" gender>Male</NewUserFormLabel >

            <NewUserFormGenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <NewUserFormLabel for="female" gender>Female</NewUserFormLabel>

            <NewUserFormGenderInput
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <NewUserFormLabel for="other" gender>Others</NewUserFormLabel>
          </NewUserGender>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Active</NewUserFormLabel>
          <NewUserFormSelect>
            <NewUserFormOption value="yes"> Yes </NewUserFormOption>
            <NewUserFormOption value="no"> No </NewUserFormOption>
          </NewUserFormSelect>
        </NewUserFormItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 1.2rem;
`;

const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6rem;
  width:400px;
  flex-basis:40%;
  
  @media screen and (max-width:700px) {
    flex-basis:100%
  }



`;
const NewUserFormLabel = styled.label`
  margin-bottom: 0.5rem;
  margin:${(props)=>props.gender && '0.6rem'};
  font-size: ${(props)=>props.gender ? '1.2rem' : "0.9rem"};
  font-weight:600;
  color:${(props)=>props.gender ? '#555' : "rgb(151,151,151)"};;
`;
const NewUserFormInput = styled.input`
  /* border: none; */
  /* width: 250px; */
  height: 1.3rem;
  padding:1rem;
  border:1px solid gray;
  border-radius:5px;

  &:focus {
    outline: none;
  }
`;

const NewUserGender = styled.div``;

const NewUserFormGenderInput = styled.input`

  margin-top:1rem;
`;

const NewUserFormSelect = styled.select`
  width: 400px;
  height:2.5rem;
  border-radius:0.3rem;

  &:focus {
    outline: none;
  }
`;



const NewUserFormOption = styled.option``;

const NewUserButton = styled.button`
    width:200px;
    border:none;
    background-color:darkblue;
    color:white;
    padding:7px 10px;
    font-weight:600;
    border-radius:0.6rem;
    margin:1.6rem 0;
    cursor: pointer;
`;

export default NewUser;
