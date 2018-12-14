import {buildApiRequest as A,getApiUrl as G} from '../utils/request'

export default {
    //登录验证接口
    login: (p,c) => A(p,'auth/login','post',c),

    //退出登录接口
    logout: (p,c) => A(p,'auth/logout','post',c),

    //获取用户信息
    getUser: (p,c) => A(p,'auth/getUser','post',c),

    //测试接口
    test: (p,c) => A(p,'test','get',c),
}


