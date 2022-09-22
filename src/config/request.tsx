import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };

export class Request {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }
  get<T = unknown>(url: string, params?: Record<string, string>, config?: AxiosRequestConfig) {
    return this.instance.request<T>({ ...config, url, params, method: 'get' });
  }
  post<T = unknown>(url: string, data?: Record<string, JSONValue>, config?: AxiosRequestConfig) {
    return this.instance.request<T>({ ...config, url, data, method: 'post' });
  }
}
