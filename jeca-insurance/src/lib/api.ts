import axios from 'axios';

// API Configuration - Use environment variable for production
export const API_CONFIG = {
  baseURL: (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149') + '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Create axios instance
export const api = axios.create(API_CONFIG);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      console.error('Resource not found');
    } else if (error.response?.status === 500) {
      console.error('Server error');
    } else if (error.response?.status === 400) {
      console.error('Bad request:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

// Request interceptor for logging (development only)
if (process.env.NODE_ENV === 'development') {
  api.interceptors.request.use(
    (config) => {
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      console.error('Request Error:', error);
      return Promise.reject(error);
    }
  );
}

export default api;
