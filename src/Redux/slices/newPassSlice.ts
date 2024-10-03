import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/api/axiosInstance";

interface PasswordUpdateState {
  isLoading: boolean;
  success: boolean | null;
  error: string | null;
}

interface UpdatePasswordParams {
  newPassword: string;
  confirmPassword: string;
}

const initialState: PasswordUpdateState = {
  isLoading: false,
  success: null,
  error: null,
};

export const updatePassword = createAsyncThunk(
  "/changepassword",
  async (
    { newPassword, confirmPassword }: UpdatePasswordParams,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        "https://subscription.apinext.in/api/changepassword",
        {
          password: newPassword,
          password_confirmation: confirmPassword,
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Password update failed"
      );
    }
  }
);

export const newPassSlice = createSlice({
  name: "password",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default newPassSlice.reducer;
