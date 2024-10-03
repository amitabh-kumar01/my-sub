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
interface SubscriptionDetails {
  name: string;
  duration: string;
  amount: number;
  tax: number;
  totalamount: number;
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
  userInterest:string;
}

interface SubscriptionState {
  subscriptions: Subscription[];
  selectedSubscription: SubscriptionDetails | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SubscriptionState = {
  subscriptions: [],
  selectedSubscription: null,

  isLoading: false,
  error: null,
};
//thsi is just a
export const fetchSubscriptions = createAsyncThunk(
  "subscriptions/fetchSubscriptions",
  async () => {
    try {
      const response = await axiosInstance.get("/getsubscription");
      return response.data;
    } catch (error: any) {
      throw new Error("Failed to fetch subscriptions");
    }
  }
);

export const getSubscriptionDetails = createAsyncThunk(
  "subscriptions/getSubscriptionDetails",
  async (Id: number | string) => {
    try {
      const response = await axiosInstance.post(`/addtocart`,{subscription_id:Id});
      return response.data.data;
    } catch (error: any) {
      throw new Error("Failed to get subscription details");
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
      })
      //--------------------selected subscription detail-------------
      .addCase(getSubscriptionDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSubscriptionDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedSubscription = action.payload;
      })
      .addCase(getSubscriptionDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Failed to fetch subscription details";
      });
  },
});
export default subscriptionSlice.reducer;
