import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

const API_URL = `${ApiUrl}deal-of-day`;

const getToken = () => {
  return localStorage.getItem('token');
};

// Fetch deals
export const fetchDeals = createAsyncThunk(
  'dealOfTheDay/fetchDeals',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Adjust based on your API response structure
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create deal
export const createDeal = createAsyncThunk(
  'dealOfTheDay/createDeal',
  async (dealData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post(API_URL, dealData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Adjust based on your API response structure
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update deal
export const updateDeal = createAsyncThunk(
  'dealOfTheDay/updateDeal',
  async ({ id, dealData }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(`${API_URL}/${id}`, dealData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Adjust based on your API response structure
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update deal status
export const updateDealStatus = createAsyncThunk(
  'dealOfTheDay/updateDealStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.put(`${API_URL}/${id}`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc; // Adjust based on your API response structure
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete deal
export const deleteDeal = createAsyncThunk(
  'dealOfTheDay/deleteDeal',
  async (id, { rejectWithValue }) => {
    try {
      const token = getToken();
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; // Return the ID of the deleted deal for removing it from state
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  deals: [],
  loading: false,
  error: null,
};

// Create slice
const dealOfTheDaySlice = createSlice({
  name: 'dealOfTheDay',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload; // The array of deals returned from the API
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals.push(action.payload); // Add the newly created deal to the state
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateDeal.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDeal.fulfilled, (state, action) => {
        state.loading = false;
        const updatedDeal = action.payload; // Updated deal from the response
        state.deals = state.deals.map((deal) =>
          deal._id === updatedDeal._id ? updatedDeal : deal
        );
      })
      .addCase(updateDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateDealStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDealStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedDeal = action.payload; // Updated deal from the response
        state.deals = state.deals.map((deal) =>
          deal._id === updatedDeal._id ? updatedDeal : deal
        );
      })
      .addCase(updateDealStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        const dealId = action.payload; // Get the ID of the deleted deal
        state.deals = state.deals.filter((deal) => deal._id !== dealId);
      });
  },
});

// Export the reducer
export default dealOfTheDaySlice.reducer;
