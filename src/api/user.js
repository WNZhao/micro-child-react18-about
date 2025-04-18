import { get, post, put, del } from '../utils/request';

// 用户登录
export function login(data) {
  return post('/user/login', data);
}

// 用户注册
export function register(data) {
  return post('/user/register', data);
}

// 获取用户信息
export function getUserInfo() {
  return get('/user/info');
}

// 更新用户信息
export function updateUserInfo(data) {
  return put('/user/info', data);
}

// 退出登录
export function logout() {
  return post('/user/logout');
} 