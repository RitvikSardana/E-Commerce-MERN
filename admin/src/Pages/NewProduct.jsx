import React from "react";
import styled from "styled-components";

const NewProduct = () => {
  return (
    <Container>
      <ProductTitle>New Product</ProductTitle>
      <ProductForm>
        <ProductLabel>Image</ProductLabel>
        <ProductInput type="file" file />
        
        <ProductLabel>Name</ProductLabel>
        <ProductInput type="text" placeholder="Apple AirPod" />
        
        <ProductLabel>In Stock</ProductLabel>
        <ProductSelect name="inStock" id="inStock">
          <ProductOption value="yes">Yes</ProductOption>
          <ProductOption value="No">No</ProductOption>
        </ProductSelect>

        <ProductLabel>Active</ProductLabel>
        <ProductSelect name="active" id="active">
          <ProductOption value="yes">Yes</ProductOption>
          <ProductOption value="No">No</ProductOption>
        </ProductSelect>
      </ProductForm>
      <ProductButton onClick={(e)=>e.preventDefault()} >Create</ProductButton>
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
  padding: 1.2rem;
`;
const ProductTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

const ProductForm = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ProductLabel = styled.label`
  margin-bottom: 0.6rem;
  color: gray;
  font-weight: 600;
`;
const ProductInput = styled.input`
  display: ${(props) => props.upload && "none"};
  margin-bottom: 0.6rem;
  border: ${(props)=>props.file ? "none" : "1px solid #ccc"};
  padding: 0.5rem;
  border-radius: 0.2rem;
  width: 250px;
`;

const ProductSelect = styled.select`
  margin-bottom: 0.6rem;
  width: 250px;
  padding: 0.5rem;
`;
const ProductOption = styled.option``;

const ProductButton = styled.button`
    border:none;
    border-radius:0.3rem;
    padding:0.3rem 0.6rem;
    cursor: pointer;
    background-color:darkblue;
    color:white;
    font-weight:bold;
`;

export default NewProduct;
