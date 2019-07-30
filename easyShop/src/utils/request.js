import axios from 'axios'
import { getToken } from "../utils/index"
import {message} from 'antd';

// create an axios instance
const service = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
  baseURL: 'http://169.254.64.73:8888',
=======
  baseURL: 'http://169.254.12.70:8888',
>>>>>>> mengyali
=======
  baseURL: 'http://169.254.12.55:8888',
=======
  baseURL: 'http://169.254.64.73:8888',
>>>>>>> b565a3a773bf6e864e0a14dcd0e04b1473eb849a
>>>>>>> 1c6e6b5b77467df0cc0ec8ffe36e0804950ce370
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
//     if (getToken()) {
//       // 让每个请求携带authorization
//       config.headers['authorization'] = getToken()
//     }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    message.error(error.message);
    // return Promise.reject(error)
  }
)

export default service
