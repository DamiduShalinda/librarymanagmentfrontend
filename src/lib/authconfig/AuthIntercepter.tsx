import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create();

const addAuthorizationHeader = (
  config: AxiosRequestConfig<any>,
  token: string
) => {
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

export const setAuthorizationHeader = (token: string) => {
  axiosInstance.interceptors.request.use((config : AxiosRequestConfig<any>) => {
    return addAuthorizationHeader(config, token);
  },
    (error) => {
        return Promise.reject(error);
    });
};

export default axiosInstance;
