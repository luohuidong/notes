const { generateNavAndSidebarConfig } = require('../utils')

const webpackConfig = require('./webpack')
const babelConfig = require('./babel')
const electronConfig = require('./electron')
const gitConfig = require('./git')
const reactConfig = require('./react')

const docs = [webpackConfig, babelConfig, electronConfig, gitConfig, reactConfig]
const nav = {
  text: '进阶',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
