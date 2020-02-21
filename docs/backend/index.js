const nodeConfig = require('./node')
const npmConfig = require('./npm')

const nav = {
  text: '后端',
  items: [
    {
      text: 'Node',
      items: [
        npmConfig.navItem
      ]
    },
  ]
}
const sidebar = Object.assign({},
  npmConfig.sidebar
)

module.exports = {
  nav,
  sidebar
}
