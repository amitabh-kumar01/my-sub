
import { axiosInstance } from "@/api/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";
import { Credentials, RegisterFormData, UserState, PasswordUpdateData } from "./Interface";

const initialState: UserState = {
  user: null,
  userDetail: [],
  isLoading: false,
  orderDetail: {},
  address: {},
};

//---------------------------Login----------------------------
export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (credentials: Credentials) => {
    try {
      const response = await axiosInstance.post("/login", {
        email: credentials.email,
        password: credentials.pwd,
      });
      const data = await response.data;
      setCookie("token", data.token);
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
);

//-------------------Register user ------------------//
export const RegisterUser = createAsyncThunk(
  "RegisterUser",
  async function (formData: RegisterFormData) {
    let body = {
      full_name: formData.fname + " " + formData?.lname,
      email: formData.email,
      phone: formData.phone,
      password: formData.pwd,
      password_confirmation: formData.cpwd,
    };
    try {
      const response = await axiosInstance.post("/registeruser", body);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
);

//-----------------------get user details------------------
export const getUserDetail = createAsyncThunk("getUserDetail", async () => {
  try {
    const response = await axiosInstance.get("/getuserprofile");
    return response.data.user;
  } catch (error) {
    console.error("Error getting user details:", error);
    throw error;
  }
});

//----------------------log out user -----------------------
export const Logout = createAsyncThunk("Logout", async () => {
  try {
    const response = await axiosInstance.post("/logout");
    deleteCookie("token");
    return response;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
});

//------------------------order view ------------------------//
export const getUserOrderDetail = createAsyncThunk("getUserOrderDetail", async () => {
  try {
    const response = await axiosInstance.get("/orderview");
    return response.data;
  } catch (error) {
    console.error("Error getting order details:", error);
    throw error;
  }
});

//--------------------update password -------------------
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (passwordData: PasswordUpdateData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/changepassword", {
        old_password: passwordData.oldPassword,
        password: passwordData.newPassword,
      });
      return response.data;
    } catch (error: any) {
      console.error("Error updating password:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to update password"
      );
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = [action.payload];
      })
      .addCase(RegisterUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(Logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Logout.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(Logout.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetail = [action.payload];
      })
      .addCase(getUserDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserOrderDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOrderDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetail = [action.payload];
      })
      .addCase(getUserOrderDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
