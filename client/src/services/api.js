import axios from 'axios';

// Define the base URL for your API
const baseURL = '/api'; // Update this if necessary

// Define your API endpoints
export const api = {
  getAllListings: () => axios.get(`${baseURL}/listings`),
  createListing: (data) => axios.post(`${baseURL}/listings`, data),
  getListing: (id) => axios.get(`${baseURL}/listings/${id}`),
  updateListing: (id, data) => axios.put(`${baseURL}/listings/${id}`, data),
  deleteListing: (id) => axios.delete(`${baseURL}/listings/${id}`),
};
