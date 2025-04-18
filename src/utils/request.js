import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: '', // 不设置 baseURL，直接使用相对路径
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如：添加token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data;
    
    // 判断返回的 code 是否为 "000000"
    if (res.code !== "000000") {
      console.error('Response error:', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
    
    return res;
  },
  error => {
    // 对响应错误做点什么
    console.error('Response error:', error);
    
    // 处理特定的HTTP错误状态
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，可以在这里处理登出逻辑
          console.error('Unauthorized');
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not Found');
          break;
        case 500:
          console.error('Server Error');
          break;
        default:
          console.error('Unknown Error');
      }
    }
    
    return Promise.reject(error);
  }
);

// 封装GET请求
export function get(url, params) {
  return service({
    url,
    method: 'get',
    params
  });
}

// 封装POST请求
export function post(url, data) {
  return service({
    url,
    method: 'post',
    data
  });
}

// 封装PUT请求
export function put(url, data) {
  return service({
    url,
    method: 'put',
    data
  });
}

// 封装DELETE请求
export function del(url, params) {
  return service({
    url,
    method: 'delete',
    params
  });
}

export default service; 