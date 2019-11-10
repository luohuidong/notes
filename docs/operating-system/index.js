const { generateNavAndSidebarConfig } = require('../utils')
const linuxConfig = require('./linux')
const ubuntuConfig = require('./ubuntu')
const windowsConfig = require('./windows')

// 定义 navBar 中前端基础相关的可选项
let nav = {
  text: '操作系统',
  items: []
}
let sidebar = {}
const configs = [linuxConfig, ubuntuConfig, windowsConfig]
generateNavAndSidebarConfig(configs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
