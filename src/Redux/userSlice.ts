import { axiosInstance } from "@/api/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

interface Credentials {
  email: string;
  pwd: string;
}
interface RegisterFormData {
  fname: string;
  lname: string;
  email: string;
  pwd: string;
  cpwd: string;
  check: string;
}

interface User {
  // Define user properties based on your API response
  id: number;
  name: string;
  email: string;
  phone:number,
  address:string
}

interface UserState {
  user: User[] | null;
  userDetail: User[]; // Assuming userDetail is an array of User
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  userDetail: [],
  isLoading: false,
};
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
      full_name: formData.fname + " " + formData.lname,
      email: formData.email,
      password: formData.pwd,
      password_confirmation: formData.cpwd,
    };

    try {
      const response = await axiosInstance.post("/registeruser", body);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
);
//-----------------------get user details------------------
export const getUserDetail = createAsyncThunk("getUserDetail", async () => {
  console.log("hi");
  try {
    const response = await axiosInstance.get("/getuserprofile");

    return response.data.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

//----------------------log out user -----------------------
export const Logout = createAsyncThunk("Logout", async () => {
  console.log("hi");
  try {
    const response = await axiosInstance.post("/logout");
    setCookie("token", "");
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login builder
    builder.addCase(LoginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = [action.payload];
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    //Register builder

    builder.addCase(RegisterUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = [action.payload];
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    //logout builder
    builder.addCase(Logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Logout.fulfilled, (state, action) => {
      console.log("i am being logout");
      state.isLoading = false;
    });
    builder.addCase(Logout.rejected, (state, action) => {
      state.isLoading = false;
    });
    //get user detail builder
    builder.addCase(getUserDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetail = [action.payload];
    });
    builder.addCase(getUserDetail.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
