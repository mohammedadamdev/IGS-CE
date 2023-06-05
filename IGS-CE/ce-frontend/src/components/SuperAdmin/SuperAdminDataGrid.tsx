import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { userFilteredlist, fetchUserList } from "../../Redux/LoginSlice";
import { SuperAdminDataGridLogics } from "../../Utils/SuperAdminDataGridLogics";

export default function SuperAdminDataGrid() {
  const { role } = SuperAdminDataGridLogics();
  const filteredUserList: any = useSelector(
    (state: any) => state.LoginSlice.filteredList
  );
  console.log("data", filteredUserList);

  const columns: GridColDef[] = [
    {
      field: "Full_Name",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Role",
      headerName: "Role",
      width: 210,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },

    {
      field: " Status",
      headerName: "Status",
      type: "number",
      width: 200,
      headerAlign: "center",
      align: "center",
      // editable: true,
      renderCell: (params) => {
        const status = params.value as string;
        return (
          <p
            style={{
              background: status === "Active" ? "#36B37E33" : "#FF563033",
              padding: "0.5rem",
              borderRadius: "10px",
              color: status === "Active" ? "#1B806A" : "#B71D18",
            }}
          >
            {status}
          </p>
        );
      },
    },
  ];
  const modifiedColumn =
    role === "owner"
      ? columns.filter((col: any) => col.field !== "Role")
      : columns;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          border: "none",
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: "#ffffff00",
            borderRadius: "5px",
            borderBottom: "none",
          },
        }}
        getRowId={(row: any) => row.User_Id}
        rows={filteredUserList ? filteredUserList : []}
        columns={modifiedColumn}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
