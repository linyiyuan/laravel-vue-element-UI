import ElementUI from 'element-ui';
import Axios from 'axios';
import Config from '../config/';

function buildApiUrl(url) {
    return `${Config.apiUrl}/${Config.apiPrefix}/${url}`;
}

//头部增加token请求
function setToken() {
    if (sessionStorage.getItem(Config.tokenKey) != null ) {
        Axios.defaults.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem(Config.tokenKey);
    }

}

function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

function buildServerApiRequest(params, url, type, callback) {
  setToken();
  if ('get' == type) {
	  params={params:params}
    //做一些加载的小动画挺好
  }
  let apiUrl = buildApiUrl(url);
  let result = Axios[type](apiUrl, params);

  if (isFunction(callback)) {//没有回调则返回es6 promise
    result.then(r => {
		r = r.data;
      //这里可以根据后台数据进一步做一些过滤或者报错之类的
      callback(r);
    }).catch(e => {
      if(process.env.NODE_ENV=='development')
        console.log(e.response.status);

        switch (e.response.status) {
            case 401:
                ElementUI.Notification.error({
                    title: '登录验证失败',
                    message: '身份验证过期，请重新登录'
                });
                break;
            // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
            case 500:
                ElementUI.Notification.error({
                    title: '请求错误',
                    message: 'Network Error'
                });
                break;
        }

    });
  }
  return result;
}


export function buildApiRequest(params, url, type, callback) {
  return buildServerApiRequest(params, url, type, callback);
}

export function getApiUrl(url) {
  //只是返回api地址而不做请求，用在上传组件之类的
  return buildApiUrl(url) + '?token=' + sessionStorage.getItem(Config.tokenKey);
}

