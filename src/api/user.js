import http from "@/utils/http";

// 密码登录
export const login = (params) => http.post('/user/login', params);


// 注册账号
export const register = (params) => http.post('/user/register', params);

// 修改密码
export const modifyPassword = (params) => http.post('/user/modifyPassword', params);


//发送短信验证码
export const sendModifyPasswordCode = (params) => http.post('/user/sendModifyPasswordCode', params);