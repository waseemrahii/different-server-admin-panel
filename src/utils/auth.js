
// utils/auth.js
import { login } from '../redux/slices/admin/authSlice';

export const checkAuth = (dispatch) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  if (token && user) {
    dispatch(login({ token, user: JSON.parse(user) }));
  }
};
