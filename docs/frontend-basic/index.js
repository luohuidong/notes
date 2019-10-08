const { generateNavAndSidebarConfig } = require('../utils')

const htmlConfig = require('./html')
const cssConfig = require('./css')
const es5Config = require('./javascript')
const typescriptConfig = require('./typescript')
const npmConfig = require('./npm')

const docs = [ htmlConfig, cssConfig, es5Config, typescriptConfig, npmConfig ]
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
