import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// Async Thunks
const getToken = () => {
  return localStorage.getItem('token');
};

// Fetch refunds for a specific vendor
export const fetchRefundsForVendor = createAsyncThunk(
  'refund/fetchRefundsForVendor',
  async (vendorId) => {
    const response = await axios.get(`${ApiUrl}refunds/vendor/?vendorId=${vendorId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token in the header
      },
    });
    return response.data.doc;
  }
);

// Fetch refunds for a specific vendor by status
export const fetchRefundsForVendorByStatus = createAsyncThunk(
  'refund/fetchRefundsForVendorByStatus',
  async ({ status }) => {
    const response = await axios.get(`${ApiUrl}refunds/?status=${status}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token in the header
      },
    });
    return response.data.doc;
  }
);

// Fetch refund by ID for a vendor
export const fetchRefundByIdForVendor = createAsyncThunk(
  'refund/fetchRefundByIdForVendor',
  async (refundId) => {
    const response = await axios.get(`${ApiUrl}refunds/${refundId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token in the header
      },
    });
    return response.data.doc;
  }
);

// Update refund status for a vendor
export const updateRefundStatus = createAsyncThunk(
  'refund/updateRefundStatus',
  async ({ refundId, status, statusReason }) => {
    const response = await axios.put(
      `${ApiUrl}refunds/${refundId}/status`,
      { status, statusReason },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Include the token in the header
        },
      }
    );
    return { refundId, status, statusReason };
  }
);

// Delete refund for a vendor
export const deleteRefund = createAsyncThunk(
  'refund/deleteRefund',
  async (refundId) => {
    await axios.delete(`${ApiUrl}refunds/${refundId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token in the header
      },
    });
    return refundId;
  }
);

// Fetch refunds with filters and search
export const fetchRefundsWithFilters = createAsyncThunk(
  'refund/fetchRefundsWithFilters',
  async ({ vendorId, searchQuery, status, startDate, endDate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ApiUrl}api/refunds/`, {
        params: { 
          vendorId, searchQuery, status, startDate, endDate 
        },
        headers: {
          Authorization: `Bearer ${getToken()}`, // Include the token in the header
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  refunds: [],       // Array of refunds
  singleRefund: null, // Single refund data (for details view)
  loading: false,
  error: null,
};

// Create slice
const refundSlice = createSlice({
  name: 'refund',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch refunds for vendor
      .addCase(fetchRefundsForVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsForVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsForVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch refunds for vendor by status
      .addCase(fetchRefundsForVendorByStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsForVendorByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsForVendorByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch refund by ID for vendor
      .addCase(fetchRefundByIdForVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundByIdForVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.singleRefund = action.payload; // Store single refund data here
      })
      .addCase(fetchRefundByIdForVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update refund status for vendor
      .addCase(updateRefundStatus.fulfilled, (state, action) => {
        const { refundId, status } = action.payload;
        state.refunds = state.refunds.map((refund) =>
          refund._id === refundId ? { ...refund, status } : refund
        );
        if (state.singleRefund && state.singleRefund._id === refundId) {
          state.singleRefund.status = status; // Update status if viewing single refund
        }
      })
      // Delete refund for vendor
      .addCase(deleteRefund.fulfilled, (state, action) => {
        const refundId = action.payload;
        state.refunds = state.refunds.filter((refund) => refund._id !== refundId);
        if (state.singleRefund && state.singleRefund._id === refundId) {
          state.singleRefund = null; // Clear single refund if deleted
        }
      })
      // Fetch refunds with filters and search
      .addCase(fetchRefundsWithFilters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsWithFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsWithFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default refundSlice.reducer;
