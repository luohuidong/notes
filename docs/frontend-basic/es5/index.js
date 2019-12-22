const { getDocsDirectory } = require('../../utils')
const objectConfig = require('./object')

const path = getDocsDirectory(__dirname)
const title = 'ES5'
const firstPost = 'material'

// 定义导航中 JavaScript 链接
const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

// 定义 JavaScript 相关内容的侧边栏
const sidebar = {
  [path]: [
    {
      title,
      children: [
        'material',
      ]
    },
    objectConfig
  ]
}

module.exports = {
  navItem,
  sidebar
}
