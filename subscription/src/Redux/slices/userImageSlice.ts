import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/api/axiosInstance";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthdate: Date;
  password: string;
  defaultAddress: string;
  alternativeAddress: string;
}

interface UserProfileState {
  userProfile: UserProfile | null;
  isLoading: boolean;
  success: boolean | null;
  error: string | null;
}

const initialState: UserProfileState = {
  userProfile: null,
  isLoading: false,
  success: null,
  error: null,
};

export const getUserProfile = createAsyncThunk(
  "userProfile/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "https://subscription.apinext.in/api/getuserprofile"
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user profile"
      );
    }
  }
);

export const updateUserImage = createAsyncThunk(
  "userImage/update",
  async (imageData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "https://subscription.apinext.in/api/updateuserimage",
        imageData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update image"
      );
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "userProfile/updateProfile",
  async (profileData: UserProfile) => {
    try {
      console.log("data=========", profileData);
      const body = {
        full_name: profileData.firstName + " " + profileData.lastName,
        phone: profileData.phone,
        address: "this is the new address",
        birthdate: profileData?.birthdate,
      };

      const response = await axiosInstance.post("/updateuserprofile", body);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
);


export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
        state.success = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      })

      
      .addCase(updateUserImage.pending, (state) => {
        state.isLoading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(updateUserImage.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateUserImage.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      })

      // Handle updateUserProfile actions
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
        state.userProfile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default userProfileSlice.reducer;
