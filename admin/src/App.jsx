import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

const Container = styled.section`
display:flex;

`;

export default App;
