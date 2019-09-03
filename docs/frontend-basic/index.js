const { generateNavAndSidebarConfig } = require('../utils')

const htmlConfig = require('./html')
const es5Config = require('./es5')
const typescriptConfig = require('./typescript')
const npmConfig = require('./npm')

const docs = [htmlConfig, es5Config, typescriptConfig, npmConfig]
const nav = {
  text: '前端基础',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
