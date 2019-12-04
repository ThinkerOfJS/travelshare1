import axios from 'axios';

// 封装发送请求的工具，默认为 get
export default function ajax(url = '', params = {}, type = 'GET') {
    // 1.创建变量
    let promise;

    // 2.返回 Promise 对象
    return new Promise((resolve, reject) => {
        // 2.1 判断请求的类型
        if (type.toUpperCase() === 'GET') { // get 请求
            let paramsStr = '';

            // 拼接请求字符串
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });

            // 过滤掉最后的 & 字符
            paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));

            url += '?' + paramsStr;
            promise = axios.get(url);

        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, params);
        }

        promise.then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    });
}
