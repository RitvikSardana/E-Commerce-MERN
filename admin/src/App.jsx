import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import UserList from "./Pages/UserList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

function App() {
  const admin =
  (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)?.currentUser)?.isAdmin || "";

  return (
    <Router>
      {admin && <Navbar />}
      <Container>
        {admin && <Sidebar />}
        <Routes>
          <Route
            path="/login"
            element={admin ? <Navigate to="/" /> : <Login />}
          />

          {admin && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </>
          )}
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
