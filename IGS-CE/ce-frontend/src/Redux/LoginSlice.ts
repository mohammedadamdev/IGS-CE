import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk("userList", async () => {
  const res = await axios.get("https://3.226.14.5:7000/user/");
  return res.data;
});

export const loginData = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isLoggedIn: false,
    error: false,
    accessToken: "",
    role: "",
    userList: [],
      filteredList: [],
    
  },
  reducers: {
    loginStatus: (state: any, action: any) => {
      state.isLoggedIn = action.payload;
    },
    loginError: (state: any, action: any) => {
      state.error = action.payload;
    },
    Token: (state: any, action: any) => {
      state.accessToken = action.payload;
    },
    userRole: (state: any, action: any) => {
      state.role = action.payload;
    },
    userFilteredlist: (state: any, action: any) => {
      state.filteredList = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchUserList.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchUserList.fulfilled, (state: any, action: any) => {
      state.userList = action.payload;
    });
    builder.addCase(fetchUserList.rejected, (state: any) => {
      state.error = true;
    });
  },
});

export const { loginStatus, loginError, Token, userRole, userFilteredlist } =
  loginData.actions;
export default loginData.reducer;
