import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

Vue.use(Router)


let RouteList = [
    {
        path: '/admin',
        component: resolve => require(['../views/layout/App.vue'], resolve),
        meta: {
            title: '首页',
            keepAlive: false,
        },
        children: [
            {
                path: '/admin',
                name: 'Dashboard',
                meta: {
                    title: '首页',
                    keepAlive: false
                },
                component: resolve => require(['../views/home/Index.vue'], resolve),
            },
            {
                path: '/admin/font_awesome',
                name: 'FontAwesome',
                meta: {
                    title: 'FontAwesome 图标',
                    keepAlive: false
                },
                component: resolve => require(['../views/icon/FontAwesome.vue'], resolve),
            },
            {
                path: '/admin/element_icon',
                name: 'ElementIcon',
                meta: {
                    title: 'Element 图标',
                    keepAlive: false
                },
                component: resolve => require(['../views/icon/ElementIcon.vue'], resolve),
            },
            {
                path: '/admin/post_manage',
                name: 'PostManage',
                meta: {
                    title: '文章管理',
                    keepAlive: false
                },
                component: resolve => require(['../views/contentManage/Index.vue'], resolve),
            },
            {
                path: '/admin/user_manage',
                name: 'UserManage',
                meta: {
                    title: '用户列表',
                    keepAlive: true
                },
                component: resolve => require(['../views/userManage/Index.vue'], resolve),
            },
            {
                path: '/admin/category_manage',
                name: 'CategoryManage',
                meta: {
                    title: '分类列表',
                    keepAlive: true
                },
                component: resolve => require(['../views/categoryManage/Index.vue'], resolve),
            },
            {
                path: '/admin/role_manage',
                name: 'RoleManage',
                meta: {
                    title: '角色列表',
                    keepAlive: true
                },
                component: resolve => require(['../views/permissionManage/role/Role.vue'], resolve),
            },
            {
                path: '/admin/permission_list',
                name: 'PermissionList',
                meta: {
                    title: '权限列表',
                    keepAlive: true
                },
                component: resolve => require(['../views/permissionManage/permission/Index.vue'], resolve),
            },
            //个人中心，可能有修改密码，头像修改等路由
            Personal.index,
        ]
    },
    {
        path: '/admin/login',
        name: 'Login',
        meta: {
            title: '后台登录',
            keepAlive: false
        },
        components: {
            blank: resolve => require(['../views/login/Login.vue'], resolve),
        }
    },

]


RouteList[0].children.push({
    path: '/admin/build_code',
    name: 'BuildCode',
    meta: {
        title: '构建代码',
        keepAlive: true
    },
    component: resolve => require(['../views/developmentTool/Build.vue'], resolve),
});

export default new Router(
    {
        mode: 'history',
        base: __dirname,
        routes: RouteList
})


