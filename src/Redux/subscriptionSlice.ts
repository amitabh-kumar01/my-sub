import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/api/axiosInstance";

interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  product_image: string;
  media: string | null;
}

interface Subscription {
  id: number;
  name: string;
  duration: string;
  amount: string;
  uuid: string | null;
  remember_token: string | null;
  is_active: number;
  in_days: number;
  products: Product[];
  title: string;
  weight_allowed: string;
  description: string;
}

interface SubscriptionState {
  subscriptions: Subscription[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SubscriptionState = {
  subscriptions: [],
  isLoading: false,
  error: null,
};

export const fetchSubscriptions = createAsyncThunk(
  "subscriptions/fetchSubscriptions",
  async () => {
    try {
      const response = await axiosInstance.get("/getsubscription");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch subscriptions");
    }
  }
);

export const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subscriptions = action.payload.subscriptions;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch subscriptions";
      });
  },
});

export default subscriptionSlice.reducer;
