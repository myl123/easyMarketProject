import axios from 'axios'
import { getToken } from "../utils/index"
import {message} from 'antd';
console.log(getToken())
// create an axios instance
const service = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  baseURL: 'http://172.20.10.3:8888',
=======
  baseURL: 'http://169.254.12.70:8888',
>>>>>>> houfaxing
=======
  baseURL: 'http://169.254.12.55:8888',
>>>>>>> houfaxing
=======
  baseURL: 'http://169.254.12.70:8888',
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['x-nideshop-token'] = getToken()
    }
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
