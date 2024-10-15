import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// API Endpoints
const SUBCATEGORY_API_URL = `${ApiUrl}sub-categories`;

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
};

// Fetch subcategories
export const fetchSubCategories = createAsyncThunk(
  'subCategory/fetchSubCategories',
  async (searchParams, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(SUBCATEGORY_API_URL, {
        params: searchParams,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get subcategory by ID
export const fetchSubCategoryById = createAsyncThunk(
  'subCategory/fetchSubCategoryById',
  async (subCategoryId, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(`${SUBCATEGORY_API_URL}/${subCategoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create subcategory
export const createSubCategory = createAsyncThunk(
  'subCategory/createSubCategory',
  async (subCategoryData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post(SUBCATEGORY_API_URL, subCategoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update subcategory
export const updateSubCategory = createAsyncThunk(
  'subCategory/updateSubCategory',
  async ({ subCategoryId, subCategoryData }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(`${SUBCATEGORY_API_URL}/${subCategoryId}`, subCategoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update subcategory status
export const updateSubCategoryStatus = createAsyncThunk(
  'subCategory/updateSubCategoryStatus',
  async ({ subCategoryId, status }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(`${SUBCATEGORY_API_URL}/${subCategoryId}/status`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete subcategory
export const deleteSubCategory = createAsyncThunk(
  'subCategory/deleteSubCategory',
  async (subCategoryId, { rejectWithValue }) => {
    try {
      const token = getToken();
      await axios.delete(`${SUBCATEGORY_API_URL}/${subCategoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return subCategoryId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  subCategories: [],
  currentSubCategory: null,
  loading: false,
  error: null,
};

// Create slice
const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchSubCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentSubCategory = action.payload;
      })
      .addCase(fetchSubCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createSubCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories.push(action.payload);
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateSubCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSubCategory = action.payload;
        state.subCategories = state.subCategories.map((s) =>
          s._id === updatedSubCategory._id ? updatedSubCategory : s
        );
        if (state.currentSubCategory && state.currentSubCategory._id === updatedSubCategory._id) {
          state.currentSubCategory = updatedSubCategory;
        }
      })
      .addCase(updateSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateSubCategoryStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSubCategoryStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSubCategory = action.payload;
        state.subCategories = state.subCategories.map((s) =>
          s._id === updatedSubCategory._id ? updatedSubCategory : s
        );
        if (state.currentSubCategory && state.currentSubCategory._id === updatedSubCategory._id) {
          state.currentSubCategory = updatedSubCategory;
        }
      })
      .addCase(updateSubCategoryStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteSubCategory.fulfilled, (state, action) => {
        const subCategoryId = action.payload;
        state.subCategories = state.subCategories.filter((s) => s._id !== subCategoryId);
        if (state.currentSubCategory && state.currentSubCategory._id === subCategoryId) {
          state.currentSubCategory = null;
        }
      });
  },
});

export default subCategorySlice.reducer;
