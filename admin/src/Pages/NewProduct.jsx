import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";


import app from "../firebase";
import { addProduct } from "../redux/apiCalls";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const categoryHandler = (e) => {
    setCategories(e.target.value.split(","));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + " " + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const product = {...inputs,img:downloadURL,categories}
          console.log(product)
          addProduct(product,dispatch)
        });
      }
    );
  };


  return (
    <Container>
      <ProductTitle>New Product</ProductTitle>
      <ProductForm>
        <ProductLabel>Image</ProductLabel>
        <ProductInput
          type="file"
          file
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <ProductLabel>Title</ProductLabel>
        <ProductInput
          type="text"
          placeholder="Apple AirPods"
          name="title"
          onChange={changeHandler}
        />

        <ProductLabel>Description</ProductLabel>
        <ProductInput
          type="text"
          name="desc"
          placeholder="description..."
          onChange={changeHandler}
        />

        <ProductLabel>Price</ProductLabel>
        <ProductInput
          name="price"
          type="number"
          placeholder="10000"
          onChange={changeHandler}
        />

        <ProductLabel>Categories</ProductLabel>
        <ProductInput
          type="text"
          placeholder="jeans,skirts"
          onChange={categoryHandler}
        />

        <ProductLabel>Stock</ProductLabel>
        <ProductSelect name="inStock" id="inStock" onClick={changeHandler}>
          <ProductOption value="true">Yes</ProductOption>
          <ProductOption value="false">No</ProductOption>
        </ProductSelect>
      </ProductForm>
      <ProductButton onClick={clickHandler}>Create</ProductButton>
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
  border: ${(props) => (props.file ? "none" : "1px solid #ccc")};
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
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: bold;
`;

export default NewProduct;
