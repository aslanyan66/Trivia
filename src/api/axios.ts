import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { config } from './api'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => config

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

const onResponse = (response: AxiosResponse): AxiosResponse => response.data

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

axios.defaults.baseURL = config
axios.interceptors.request.use(onRequest, onRequestError)
axios.interceptors.response.use(onResponse, onResponseError)
