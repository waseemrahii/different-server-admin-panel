

const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiConfig = {
  admin: `${BASE_URL}/api/v1/admin`,
  user: `${BASE_URL}/api/v1/user`,
  seller: `${BASE_URL}/api/v1/seller`,
  transaction: `${BASE_URL}/api/v1/transaction`,
};

export default apiConfig;
