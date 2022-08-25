import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import UserList from "./Pages/UserList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from "./Pages/NewUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
`;

export default App;
