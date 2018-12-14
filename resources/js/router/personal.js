export default {
  index:{
    path: '/admin/personal',
    name: 'Personal',
    meta: {
      title: '个人中心',
      keepAlive: true
    },
    component: resolve => require(['../views/personal/Index.vue'], resolve),
  }
}
