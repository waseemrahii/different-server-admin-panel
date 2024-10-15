import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// Fetch banners
export const fetchBanners = createAsyncThunk(
  'banner/fetchBanners',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}banners`, { params: searchParams });
      console.log("baner",response )
      return response.data.doc; // Assuming response contains the banner data in `doc`
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create banner
export const createBanner = createAsyncThunk(
  'banner/createBanner',
  async (bannerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/banner`, bannerData);
      return response.data.doc; // Assuming the response contains the created banner
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update banner
export const updateBanner = createAsyncThunk(
  'banner/updateBanner',
  async ({ bannerId, bannerData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/banner/${bannerId}`, bannerData);
      return response.data.doc; // Assuming the response contains the updated banner
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update banner status
export const updateBannerStatus = createAsyncThunk(
  'banner/updateBannerStatus',
  async ({ bannerId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_URL}/banner/${bannerId}/publish`, { publish: status });
      return response.data.doc;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete banner
export const deleteBanner = createAsyncThunk(
  'banner/deleteBanner',
  async (bannerId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/banner/${bannerId}`);
      return bannerId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  banners: [],
  loading: false,
  error: null,
};

// Create slice
const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch banners
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Create banner
      .addCase(createBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banners.push(action.payload);
      })
      .addCase(createBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update banner
      .addCase(updateBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBanner = action.payload;
        state.banners = state.banners.map((banner) =>
          banner._id === updatedBanner._id ? updatedBanner : banner
        );
      })
      .addCase(updateBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Update banner status
      .addCase(updateBannerStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBannerStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBanner = action.payload;
        state.banners = state.banners.map((banner) =>
          banner._id === updatedBanner._id ? updatedBanner : banner
        );
      })
      .addCase(updateBannerStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Delete banner
      .addCase(deleteBanner.fulfilled, (state, action) => {
        const bannerId = action.payload;
        state.banners = state.banners.filter((banner) => banner._id !== bannerId);
      });
  },
});

export default bannerSlice.reducer;
