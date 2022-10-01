import axios, { AxiosRequestHeaders, AxiosStatic } from "axios";

export const httpClient: () => AxiosStatic = () => {
  const headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json'
  };
  axios.defaults.headers.common = headers;
  return axios;
};
