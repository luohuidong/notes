const { generateNavAndSidebarConfig } = require('../utils')

const webpackConfig = require('./webpack')
const babelConfig = require('./babel')
const electronConfig = require('./electron')

const docs = [webpackConfig, babelConfig, electronConfig]
const nav = {
  text: '前端工程化',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
