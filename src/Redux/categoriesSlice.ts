import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/api/axiosInstance";

interface Category {
  id: number;
  name: string;
  parent_name?: string | null;
  media_id?: number | null;
  is_active: number;
  is_menu: number;
}

interface RetCatState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RetCatState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk("fetchCategories", 
  async () => {
  // console.log("fetch data redux");
  try {
    const response = await axiosInstance.get("/getcategories");
    const data = response.data;
    console.log(data, "Fetched categories data");
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
});

export const retCatSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.cate$categorys;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export default retCatSlice.reducer;
