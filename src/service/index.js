import ajax from './ajax'

const BASE_URL = '/api';

// 用户模块
export const loginPwd = (username, password) => ajax(BASE_URL + '/user/login',{ username, password }, 'POST');
export const register = (username, password) => ajax(BASE_URL + '/user/register', {username, password}, 'POST');
export const forgotPwd = (username, password) => ajax(BASE_URL + '/user/forgot', {username, password}, "POST");
