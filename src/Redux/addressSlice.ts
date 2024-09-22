import { axiosInstance } from "@/api/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AddressData {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  city: string;
  country: string;
  id:number|null;
}

//------------------------get user address ------------------------//
export const getUserAddress= createAsyncThunk("getUserAddress", async () => {
  try {
    const response = await axiosInstance.get("/getuseraddress");
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});
//------------------------add user new address ------------------------//
export const addUserNewAddress= createAsyncThunk(" addUserNewAddress", async (Data:AddressData) => {
  try {
    let body = {
      full_name: Data.name ,
      phone:Data.phone,
      pincode: Data.pincode,
      address: Data.address,
      city:Data.city,
      country:Data.country
    };
    const response = await axiosInstance.post("/storeadress",body);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

//------------------------edit user address ------------------------//
export const editAddress= createAsyncThunk(" editAddress", async (Data:AddressData) => {
  try {
    let body = {
      full_name: Data.name ,
      phone:Data.phone,
      pincode: Data.pincode,
      address: Data.address,
      city:Data.city,
      country:Data.country,
      id:Data.id
    };
    const response = await axiosInstance.post("/updateadress",body);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

//---------------------set Default address----------------
export const defaultAddress= createAsyncThunk("defaultAddress", async (Data) => {
  try {
    let body = {
      address_id:Data
          };
    const response = await axiosInstance.post("/defaultaddress",body);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});
//--------------------remove address------------------
export const removeUserAddress= createAsyncThunk("removeUserAddress", async (Data) => {
  try {
    
    const response = await axiosInstance.delete(`/destroyadrress/${Data}`);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
});

const initialState= {
  isLoading: false,
  isError:false,
  address:{}
}
export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        //-----------get address builder ---------------------
    builder.addCase( getUserAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase( getUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.address= [action.payload];
    });
    builder.addCase( getUserAddress.rejected, (state, action) => {
      state.isError=true;
      state.isLoading = false;
    });
    //-----------add new address builder ---------------------
    builder.addCase( addUserNewAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase( addUserNewAddress.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase( addUserNewAddress.rejected, (state, action) => {
      state.isError=true;
      state.isLoading = false;
    });
    //-----------edit address builder ---------------------
    builder.addCase(editAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editAddress.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(editAddress.rejected, (state, action) => {
      state.isError=true;
      state.isLoading = false;
    });
//------------------------------default Address builder-------------------
    builder.addCase(defaultAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(defaultAddress.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(defaultAddress.rejected, (state, action) => {
      state.isError=true;
      state.isLoading = false;
    });
//------------------------------Remove Address builder-------------------
    builder.addCase(removeUserAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(removeUserAddress.rejected, (state, action) => {
      state.isError=true;
      state.isLoading = false;
    });


  },
});

export default addressSlice.reducer;
