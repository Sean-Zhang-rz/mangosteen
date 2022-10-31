import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Toast } from 'vant';

type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };
export interface Result<R> {
  code: number;
  data: R;
  msg: string;
}
export class Request {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('jwt');
      if (token) config.headers!.Authorization = `Bearer ${token}`;
      return config;
    });
    this.instance.interceptors.response.use(
      (respopnse) => respopnse.data,
      (error) => {
        if (error.response) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 429) {
            alert('请求太频繁了');
          }
        }
        Toast(error.response.data.msg);
        throw error.response.data.msg;
      }
    );
  }
  get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<Result<T>>({
      ...config,
      url,
      params,
      method: 'get'
    }) as unknown as Promise<Result<T>>;
  }
  post<T = unknown>(
    url: string,
    data?: Record<string, JSONValue>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<Result<T>>({
      ...config,
      url,
      data,
      method: 'post'
    }) as unknown as Promise<Result<T>>
  }
  patch<T = unknown>(
    url: string,
    data?: Record<string, JSONValue>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<Result<T>>({
      ...config,
      url,
      data,
      method: 'patch'
    }) as unknown as Promise<Result<T>>;
  }
  delete<T = unknown>(
    url: string,
    params?: Record<string, string>,
    config?: Omit<AxiosRequestConfig, 'url' | 'params' | 'method'>
  ) {
    return this.instance.request<Result<T>>({
      ...config,
      url,
      params,
      method: 'delete'
    }) as unknown as Promise<Result<T>>;
  }
}

const request = new Request('/api/v1');

export default request;
