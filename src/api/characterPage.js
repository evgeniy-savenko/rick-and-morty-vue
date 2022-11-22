import axios from '@/api/axios';

const getCard = (apiUrl) => {
  return axios.get(apiUrl);
};

const getPagination = (apiUrl) => {
  return axios.get(apiUrl);
};

export default {
  getCard,
  getPagination,
};
