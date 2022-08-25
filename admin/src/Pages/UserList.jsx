import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../dummyData";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

const UserList = () => {
  const [rowData, setRowData] = useState(rows);

  const deleteHandler = (id) => {
    console.log(id);

    setRowData(rowData.filter((item) => item.id !== id));

    console.log(rowData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <UserContainer>
          <Image src={params.row.avatar} alt="" />
          {params.row.username}
        </UserContainer>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <ActionContainer>
          <Link to={`/user/${params.row.id}`}>
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
`;

const UserContainer = styled.div`
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

export default UserList;
