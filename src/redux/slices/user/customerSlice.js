import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiUrl from '../../../ApiUrl';

// Async thunk to fetch customers
export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token'); // Fetch token from localStorage
    try {
      const response = await fetch(`${ApiUrl}customers/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("customer data ===", data);
      return data.doc; // Assuming the response contains customers in data.doc
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to update customer status (block/unblock)
export const updateCustomerStatus = createAsyncThunk(
  'customers/updateCustomerStatus',
  async ({ id, status }, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${ApiUrl}customers/status/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      return { id, status: data.status }; // Return the updated status
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to delete a customer
export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${ApiUrl}customers/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; // Return the deleted customer's ID
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    // Synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch customers
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload; // Set the fetched customers
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Update customer status
      .addCase(updateCustomerStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCustomerStatus.fulfilled, (state, action) => {
        const { id, status } = action.payload;
        const existingCustomer = state.customers.find((customer) => customer._id === id);
        if (existingCustomer) {
          existingCustomer.status = status; // Update the status in the state
        }
        state.status = 'succeeded';
      })
      .addCase(updateCustomerStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Delete customer
      .addCase(deleteCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = state.customers.filter((customer) => customer._id !== action.payload); // Remove the deleted customer from the state
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
