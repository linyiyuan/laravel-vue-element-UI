import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../config/'
import Api from '../api/'
import router from '../router/'
import ElementUI from 'element-ui'

Vue.use(Vuex)
Vue.use(ElementUI)


export default new Vuex.Store({

    state: {
        username: null,
        avatar: null,
        role:null,
        permission:null,
        token: null,
        auth: false,
    },

    mutations: {
        logined (state,token) {
            state.auth = true
            state.token = token
            sessionStorage.setItem(Config.tokenKey, token)//储存token到sessionstorage
        },

        profile (state,data) {
            state.username = data.username
            state.avatar = data.avatar
            state.role = data.role
            state.permission = data.permission
        },

        logout (state) {
            state.name = null
            state.avatar = null
            state.auth = false
            state.token = null
        },

        refreshToken(state, token) {
            state.token = token
            sessionStorage.setItem( Config.tokenKey, token);
        }
    },
    actions: {
        logined({dispatch,commit}, token) {
            return new Promise(function (resolve,reject) {
                commit('logined', token);
                dispatch('profile').then(() => {
                    resolve()
                }).catch(() => {
                    reject()
                })
            })
        },

        profile({commit}) {
            return new Promise(function (resolve, reject) {
                    Api.getUser('',(c) => {
                        if (c.code == 200){
                            commit('profile', JSON.parse(c.data))
                            resolve()
                        } else {
                            reject()
                        }
                    })
            })
        },

        logout({commit,state}) {
                Api.logout({'token' : state.token},(c) => {
                    if (c.code == 200){
                        //退出成功
                        commit('logout')
                        sessionStorage.removeItem(Config.tokenKey)
                        router.push({path: '/login'});
                    }
                });
        },

        refreshToken({commit}, token) {
            return new Promise(function (resolve, reject) {
                commit('refreshToken', token);
            })
        }
    }
})


