import ajax from './ajax'

const BASE_URL = '/api';

// 用户模块
export const loginPwd = (username, password) => ajax(BASE_URL + '/user/login',{ username, password }, 'POST'); //登录
export const register = (username, password) => ajax(BASE_URL + '/user/register', {username, password}, 'POST'); // 注册
export const forgotPwd = (username, password) => ajax(BASE_URL + '/user/forgot', {username, password}, 'POST'); // 忘记密码
export const getUserInfo = (username) => ajax(BASE_URL + '/user/getuser', {username}, 'POST');
// 游记模块


// 景区门票模块
