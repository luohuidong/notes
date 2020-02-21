const material = require('./basic/material')
const es5Config = require('./basic/es5')
const typescriptConfig = require('./basic/typescript')

const reactConfig = require('./react/react')
const reactNativeConfig = require('./react/react-native')

const gitConfig = require('./engineering/git')
const webpackConfig = require('./engineering/webpack')
const babelConfig = require('./engineering/babel')
const automaticTextConfig = require('./engineering/automatic-test')
const log = require('./engineering/log')

const electronConfig = require('./electron')

const nav = {
  text: '前端',
  items: [
    {
      text: '基础',
      items: [
        material.navItem, es5Config.navItem, typescriptConfig.navItem,
      ]
    },
    {
      text: '工程化',
      items: [
        gitConfig.navItem, webpackConfig.navItem, babelConfig.navItem,
        automaticTextConfig.navItem, log.navItem
      ]
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
  material.sidebar, es5Config.sidebar, typescriptConfig.sidebar,
  gitConfig.sidebar, webpackConfig.sidebar, babelConfig.sidebar, automaticTextConfig.sidebar, log.sidebar,
  reactConfig.sidebar, reactNativeConfig.sidebar,
  electronConfig.sidebar
)

module.exports = {
  nav,
  sidebar
}
