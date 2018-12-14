
const devUrl = 'http://web.shop.com:81'; //沙箱环境Api地址
const proUrl = 'http://web.shop.com:81'; //正式环境Api地址

export default {
  apiUrl : process.env.NODE_ENV=='development' ? devUrl : proUrl,
  apiPrefix : "api",
  gitHub : 'https://github.com/xusenlin/ElementUIAdmin2'
}

