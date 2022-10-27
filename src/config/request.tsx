import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Toast } from 'vant';

type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };

export class Request {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
    this.instance.interceptors.response.use(
      (respopnse) => respopnse,
      (error) => {
        if (error.response) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 429) {
            alert('请求太频繁了');
          }
        }
        Toast(error.response.data.msg)
        throw error.response.data.msg;
      }
    );
  }
  get<T = unknown>(
    url: string,
    params?: Record<string, string>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<T>({ ...config, url, params, method: 'get' });
  }
  post<T = unknown>(
    url: string,
    data?: Record<string, JSONValue>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<T>({ ...config, url, data, method: 'post' });
  }
  patch<T = unknown>(
    url: string,
    data?: Record<string, JSONValue>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<T>({ ...config, url, data, method: 'patch' });
  }
  delete<T = unknown>(
    url: string,
    params?: Record<string, string>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<T>({ ...config, url, params, method: 'delete' });
  }
}

const request = new Request('/api/v1');

export default request;
