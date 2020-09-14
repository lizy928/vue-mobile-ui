import axios from 'axios'
import store from '@/store'
import QS from 'qs'
import {Toast} from "vant";

/**
 * 定义请求常量
 * TIME_OUT, BASE_URL
 */
export const timeout = 5000;    // 请求超时时间
export const baseURL = 'http://127.0.0.1:8888';   // 引入全局url，定义在全局变量process.env中，开发环境为了方便转发，值为空字符串

// 创建axios实例
const instance = axios.create({
    baseURL,
    timeout
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 封装请求拦截
instance.interceptors.request.use(
    config => {
        const token = store.state.token;
        if (token != null) {                          // 如果token不为null，否则传token给后台
            config.headers['X-Token'] = token
        }
        return config
    },
    error => {
        console.warn(error);
        return Promise.reject(error)
    }
);

// 封装响应拦截，判断token是否过期
instance.interceptors.response.use(
    response => {
        let {data} = response;
        // 如果后台返回的错误标识为token过期，则重新登录
        if (data.msg === 'token failure!') {
            Toast("身份认证已过期，请重新登录");
        } else {
            return Promise.resolve(response.data)
        }
    },
    error => {
        if (error.response.status === 401) {
            Toast("没有相关权限");
            return;
        }
        if (error.response.status === 500) {
            Toast("服务器内部错误");
            return;
        }
        if (error.message === 'Network Error') {
            Toast("网络异常");
            return;
        }
        if (error.response.status !== 200) {
            Toast(error.response.data);
            return;
        }
        return Promise.reject(error)
    }
);

class http {
    static async get(url, params) {
        return await instance.get(url, {params: params})
    }

    static async post(url, params) {
        return await instance.post(url, QS.stringify(params))
    }

    static async put(url, params) {
        return await instance.put(url, QS.stringify(params))
    }

    static async delete(url, params) {
        return await instance.delete(url, {params: QS.stringify(params)})
    }

    static async upload(url, params) {
        const formData = new FormData();
        Object.keys(params).forEach((key) => {
            formData.append(key, params[key])
        });
        let config = {
            headers: {"Content-Type": "multipart/form-data"}
        };
        return await instance.post(url, formData, config)
    }
}

export default http
