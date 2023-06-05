import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function PropertyDataGrid() {
  const Data: any = useSelector(
    (state: any) => state.ClientSlice.filteredClientData.filteredClientData
  );
  const columns: GridColDef[] = [
    // { field: "Client_ID", headerName: "S.NO", width: 100 },
    {
      field: "Client_FullName",
      headerName: "Name",
      width: 180,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Client_Block",
      headerName: "Blocks",
      width: 160,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Client_FlatNo",
      headerName: "Flat No",
      width: 160,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Client_ListingType",
      headerName: "Type",
      type: "number",
      width: 120,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Client_BHK",
      headerName: "BHK",
      type: "number",
      width: 160,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "Client_Status",
      headerName: "Status",
      type: "number",
      width: 120,
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
        getRowId={(row: any) => row.Client_ID}
        rows={Data ? Data : []}
        columns={columns}
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
