
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// API Endpoints
const API_URL = `${ApiUrl}brands`;

// Utility function to get token from localStorage
const getToken = () => localStorage.getItem('token');

// Fetch brands
export const fetchBrands = createAsyncThunk(
  'brand/fetchBrands',
  async (searchParams, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(API_URL, {
        params: searchParams,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Accessing brand data from the `docs` field
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get brand by ID
export const fetchBrandById = createAsyncThunk(
  'brand/fetchBrandById',
  async (brandId, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/${brandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Accessing brand data from the `docs` field
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create brand
export const createBrand = createAsyncThunk(
  'brand/createBrand',
  async (brandData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post(`http://192.168.0.100:3000/api/v1/admin/brands`, brandData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Ensure the response contains the created brand
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update brand
export const updateBrand = createAsyncThunk(
  'brand/updateBrand',
  async ({ brandId, brandData }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const formData = new FormData();
      for (const key in brandData) {
        formData.append(key, brandData[key]);
      }

      const response = await axios.put(`${API_URL}/${brandId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Ensure the response contains the updated brand
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update brand status
export const updateBrandStatus = createAsyncThunk(
  'brand/updateBrandStatus',
  async ({ brandId, status }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(`${API_URL}/${brandId}/status`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Ensure the response contains the updated brand
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete brand
export const deleteBrand = createAsyncThunk(
  'brand/deleteBrand',
  async (brandId, { rejectWithValue }) => {
    try {
      const token = getToken();
      await axios.delete(`${API_URL}/${brandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return brandId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  brands: [],
  currentBrand: null,
  loading: false,
  error: null,
};

// Create slice
const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch brands
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Get brand by ID
      .addCase(fetchBrandById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrandById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBrand = action.payload;
      })
      .addCase(fetchBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Create brand
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.push(action.payload);
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update brand
      .addCase(updateBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBrand = action.payload;
        state.brands = state.brands.map((b) =>
          b._id === updatedBrand._id ? updatedBrand : b
        );
        if (state.currentBrand && state.currentBrand._id === updatedBrand._id) {
          state.currentBrand = updatedBrand;
        }
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update brand status
      .addCase(updateBrandStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBrandStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBrand = action.payload;
        state.brands = state.brands.map((b) =>
          b._id === updatedBrand._id ? updatedBrand : b
        );
        if (state.currentBrand && state.currentBrand._id === updatedBrand._id) {
          state.currentBrand = updatedBrand;
        }
      })
      .addCase(updateBrandStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Delete brand
      .addCase(deleteBrand.fulfilled, (state, action) => {
        const brandId = action.payload;
        state.brands = state.brands.filter((b) => b._id !== brandId);
        if (state.currentBrand && state.currentBrand._id === brandId) {
          state.currentBrand = null;
        }
      });
  },
});

export default brandSlice.reducer;
