

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiConfig = {
  admin: `${BASE_URL}/api/v1/admin`,
  user: `${BASE_URL}/api/v1/users`,
  seller: `${BASE_URL}/api/v1/seller`,
  transaction: `${BASE_URL}/api/v1/transaction`,
};

export default apiConfig;
