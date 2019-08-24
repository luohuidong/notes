const htmlConfig = require('./html')
const es5Config = require('./es5')
const typescriptConfig = require('./typescript')

// 定义 navBar 中前端基础相关的可选项
const nav = {
  text: '前端基础',
  items: [
    htmlConfig.navItem,
    es5Config.navItem,
    typescriptConfig.navItem,
  ]
}

const sidebar = {
  ...htmlConfig.sidebar,
  ...es5Config.sidebar,
  ...typescriptConfig.sidebar
}

module.exports = {
  nav,
  sidebar
}