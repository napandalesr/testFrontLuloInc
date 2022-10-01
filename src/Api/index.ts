import axios, { AxiosRequestHeaders, AxiosStatic } from "axios";

export const httpClient: () => AxiosStatic = () => {
  return axios;
};

export const headers: AxiosRequestHeaders = {
  'Content-Type': 'application/json'
};

export const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};
