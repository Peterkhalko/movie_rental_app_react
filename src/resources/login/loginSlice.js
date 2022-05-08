import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../../services/loginService";
const initialState = {
  token: "",
};
export const userLogin = createAsyncThunk("/login", async (data) => {
  const res = await login(data);
  return res.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      console.log("state.token", state.token);
    });
  },
});

export const { reducer } = loginSlice;
export default reducer;
