import { url } from '../lib/endpoint'
import axios from 'axios'

export const intanceAxios = axios.create({
  credentials: 'include',
  baseURL: url,
  headers: {
    'Content-Type': 'application/json; charset-utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': '*'
  }
})
