import axios from 'axios';

import { API_BASE_URL } from '../constants/api-paths';

const ApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Key-Inflection': 'camel',
  },
});

export default ApiClient;
