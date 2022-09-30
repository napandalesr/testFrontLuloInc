import axios, { AxiosRequestHeaders, AxiosStatic } from "axios";

export const httpClient: () => AxiosStatic = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  const headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json'
  };
  axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
  axios.defaults.headers.common = headers;
  return axios;
};
