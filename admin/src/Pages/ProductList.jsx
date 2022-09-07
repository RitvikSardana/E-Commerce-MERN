import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../dummyData";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { deleteProduct, getProducts } from "../redux/apiCalls";

const ProductList = () => {
  const [rowData, setRowData] = useState(productRows);
  const dispatch = useDispatch()
  const {products} = useSelector(state=>state.product)

  useEffect(() => {
    
    getProducts(dispatch)
  
    return () => {
    }
  }, [dispatch])
  
  const deleteHandler = (id) => {
    deleteProduct(id,dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => (
        <ProductContainer>
          <Image src={params.row.img} alt="" />
          {params.row.title}
        </ProductContainer>
      ),
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <ActionContainer>
          <Link to={`/product/${params.row._id}`}>
            <Button>Edit</Button>
          </Link>
          <DeleteOutlinedIcon onClick={() => deleteHandler(params.row._id)} />
        </ActionContainer>
      ),
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={products}
        getRowId = {(row) =>row._id}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 1.2rem;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.4rem;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: red;
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  padding: 0.6rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 0.4rem;
`;

export default ProductList;
