const webpackConfig = require('./webpack')
const babelConfig = require('./babel')

const nav = {
  text: '前端工程化',
  items: [
    webpackConfig.navItem,
    babelConfig.navItem,
  ]
}

const sidebar = {
  ...webpackConfig.sidebar,
  ...babelConfig.sidebar
}

module.exports = {
  nav,
  sidebar
}
