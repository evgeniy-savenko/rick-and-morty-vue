import axios from '@/api/axios';

const getLocation = (apiUrl) => {
  return axios.get(apiUrl);
};

const getPagination = (apiUrl) => {
  return axios.get(apiUrl);
};

export default {
  getLocation,
  getPagination,
};
