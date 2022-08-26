import PublishOutlined from "@mui/icons-material/PublishOutlined";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../Components/Chart";
import { productData } from "../dummyData";

const Product = () => {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newProduct">
        <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>

      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>

        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ProductName>Apple Airpods</ProductName>
          </ProductInfoTop>

          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>213</ProductInfoValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>3213</ProductInfoValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoKey>in stock : </ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductLabel>Apple AirPod</ProductLabel>
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
          </ProductFormLeft>

          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImage src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              
              <ProductLabel for="file">
                <PublishOutlined />
              </ProductLabel>
              <ProductInput type="file" id="file" upload />
            </ProductUpload>
            <ProductButton onClick={(e)=>e.preventDefault()} >Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};


const Container = styled.div`
  flex: 4;
  padding: 1.2rem;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 5rem;
  padding: 0.35rem;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 2;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 1.3rem;
  margin: 1.3rem;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 0.6rem;
`;

const ProductInfoItem = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 1.3rem;
  margin: 1.3rem;
  -webkit-box-shadow: 0px 0px 11px -4px #000000;
  box-shadow: 0px 0px 11px -4px #000000;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content:space-between;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction:column;
`;
const ProductLabel = styled.label`
  margin-bottom:0.6rem;
  color:gray;
`;

const ProductInput = styled.input`
  display:${(props)=>props.upload && "none"};
  margin-bottom: 0.6rem;
  border:none;
  padding:0.3rem;
  border-bottom:1px solid gray;
`;

const ProductSelect = styled.select`
  margin-bottom:0.6rem;
`;
const ProductOption = styled.option``;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-around;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
  svg{
    cursor: pointer;
  }

`;
const ProductUploadImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right:0.3rem;
  border-radius:0.4rem;
  object-fit:cover;
`;
const ProductButton = styled.button`
    border:none;
    border-radius:0.3rem;
    padding:0.3rem;
    cursor: pointer;
    background-color:darkblue;
    color:white;
    font-weight:bold;
`;

export default Product;
