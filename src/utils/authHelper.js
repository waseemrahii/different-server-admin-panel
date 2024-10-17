
// Constants for storage keys 

const getStorageKey = (role) => ({
    token: `token`,
    user: `user`,
  });
  
  // Function to save token and user data
  export const saveAuthData = (role, token, user) => {
    const { token: tokenKey, user: userKey } = getStorageKey(role);
    localStorage.setItem(tokenKey, token);
    localStorage.setItem(userKey, JSON.stringify(user));
  };

// Function to get token and user data
  export const getAuthData = (role) => {
    const { token: tokenKey, user: userKey } = getStorageKey(role);
    const token = localStorage.getItem(tokenKey);
    const user = localStorage.getItem(userKey);
    return { token, user: user ? JSON.parse(user) : null };
  };

// Function to clear token and user data
  export const clearAuthData = (role) => {
    const { token: tokenKey, user: userKey } = getStorageKey(role);
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(userKey);
  };
  