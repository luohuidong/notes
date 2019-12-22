const { generateNavAndSidebarConfig } = require('../utils')

const material = require('./material')
const cssConfig = require('./css')
const es5Config = require('./es5')
const typescriptConfig = require('./typescript')
const npmConfig = require('./npm')

const docs = [ material, cssConfig, es5Config, typescriptConfig, npmConfig ]
const nav = {
  text: '前端',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
