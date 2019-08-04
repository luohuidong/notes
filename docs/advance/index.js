const webpackConfig = require('./webpack')

const nav = { 
  text: '前端工程化', 
  items: [
    webpackConfig.navItem
  ]
}

const sidebar = {
  ...webpackConfig.sidebar,
}

module.exports = {
  nav,
  sidebar
}
