const material = require('./material')
const cssConfig = require('./css')
const es5Config = require('./es5')
const typescriptConfig = require('./typescript')
const npmConfig = require('./npm')

const reactConfig = require('./react')
const reactNativeConfig = require('./react-native')

const gitConfig = require('./git')
const webpackConfig = require('./webpack')
const babelConfig = require('./babel')
const electronConfig = require('./electron')

const nav = {
  text: '前端',
  items: [
    {
      text: '基础',
      items: [
        material.navItem, cssConfig.navItem, es5Config.navItem, typescriptConfig.navItem,
        npmConfig.navItem
      ]
    },
    {
      text: '工程化',
      items: [gitConfig.navItem, webpackConfig.navItem, babelConfig.navItem]
    },
    {
      text: 'React 全家桶',
      items: [reactConfig.navItem, reactNativeConfig.navItem]
    },
    {
      text: '跨平台',
      items: [electronConfig.navItem]
    }
  ]
}
const sidebar = Object.assign({},
  material.sidebar, cssConfig.sidebar, es5Config.sidebar, typescriptConfig.sidebar, npmConfig.sidebar,
  gitConfig.sidebar, webpackConfig.sidebar, babelConfig.sidebar,
  reactConfig.sidebar, reactNativeConfig.sidebar,
  electronConfig.sidebar
)

module.exports = {
  nav,
  sidebar
}
