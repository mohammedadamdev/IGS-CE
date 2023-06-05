import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClientData = createAsyncThunk("fetchClientData", async () => {
    const response = await fetch("https://3.226.14.5:7000/clients/");
    console.log("resss")
  return response.json();
});

export const clientData = createSlice({
  name: "Client",
  initialState: {
    Url: "https://3.226.14.5:7000",
    loading: false,
    clientData: [],
    error: false,
    filteredClientData: [],
  },
  reducers: {
    clientDataFiltered: (state: any, action: any) => {
      state.filteredClientData = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchClientData.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchClientData.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.clientData = action.payload;
    });
    builder.addCase(fetchClientData.rejected, (state: any) => {
      state.error = true;
    });
  },
});
export const { clientDataFiltered } = clientData.actions;
export default clientData.reducer;
