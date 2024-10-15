import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import ApiUrl from '../../../ApiUrl';
import { ErrorMessage } from '../../../utils/ErrorMessage';  

const API_URL = `${ApiUrl}coupons/`;

const getToken = () => localStorage.getItem('token');

// Thunk for fetching coupons
export const fetchCoupons = createAsyncThunk(
  'coupons/fetchCoupons',
  async (_, { rejectWithValue }) => {
    const token = getToken(); // Get the token from localStorage
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);


export const createCoupon = createAsyncThunk(
  'coupons/createCoupon',
  async (couponData, { rejectWithValue }) => {
    const token = getToken(); // Get the token from localStorage
    try {
      const response = await axios.post(API_URL, couponData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.doc;
    } catch (error) {
      console.error('Error creating coupon:', error.response || error);
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);


// Thunk for updating coupon status
export const updateCouponStatus = createAsyncThunk(
  'coupons/updateCouponStatus',
  async ({ couponId, status }, { rejectWithValue }) => {
    const token = getToken(); // Get the token from localStorage
    try {
      const response = await axios.put(
        `${API_URL}${couponId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for deleting a coupon
export const deleteCoupon = createAsyncThunk(
  'coupons/deleteCoupon',
  async (couponId, { rejectWithValue }) => {
    const token = getToken(); // Get the token from localStorage
    try {
      const response = await axios.delete(`${API_URL}${couponId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        return couponId;
      }
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

const couponSlice = createSlice({
  name: 'coupons',
  initialState: {
    coupons: [], // To store the list of coupons
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(fetchCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons.push(action.payload);
        Swal.fire('Success!', 'Coupon added successfully.', 'success');
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        Swal.fire('Error!', 'There was an issue adding the coupon.', 'error');
      })
      .addCase(updateCouponStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCouponStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCoupon = action.payload;
        state.coupons = state.coupons.map(coupon =>
          coupon.id === updatedCoupon.id ? updatedCoupon : coupon
        );
      })
      .addCase(updateCouponStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.loading = false;
        const deletedCouponId = action.payload;
        state.coupons = state.coupons.filter(coupon => coupon.id !== deletedCouponId);
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = couponSlice.actions;
export default couponSlice.reducer;
