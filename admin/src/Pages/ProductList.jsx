import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../dummyData";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [rowData, setRowData] = useState(productRows);

  const deleteHandler = (id) => {
    console.log(id);

    setRowData(rowData.filter((item) => item.id !== id));

    console.log(rowData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => (
        <ProductContainer>
          <Image src={params.row.img} alt="" />
          {params.row.name}
        </ProductContainer>
      ),
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
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
          <Link to={`/product/${params.row.id}`}>
            <Button>Edit</Button>
          </Link>
          <DeleteOutlinedIcon onClick={() => deleteHandler(params.row.id)} />
        </ActionContainer>
      ),
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={rowData}
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
