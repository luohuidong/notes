const { generateNavAndSidebarConfig } = require('../utils')

const webpackConfig = require('./webpack')
const babelConfig = require('./babel')
const electronConfig = require('./electron')
const gitConfig = require('./git')
const reactConfig = require('./react')
const reactNativeConfig = require('./react-native')

const docs = [webpackConfig, babelConfig, electronConfig, gitConfig, reactConfig, reactNativeConfig]
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
