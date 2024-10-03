import { data } from '../../constants/landingpage_constants/constants';
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
  try {
    const response = await axiosInstance.get("/getcategories");
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
});

//----------------------add user interes------------------
export const addUserInterest= createAsyncThunk(" addUserInterest", 
  async (data) => {
  try {
    let body = {
    "category_id":data
    };
    const response = await axiosInstance.post("/userinterest",body);
    return response.data;
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
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch categories";
      })
      //-------------------add user interest --------------------
      .addCase(addUserInterest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUserInterest.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addUserInterest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to add user interest";
      });
  },
});

export default retCatSlice.reducer;
