const { getDocsDirectory } = require('../../utils')
const objectConfig = require('./object')

const path = getDocsDirectory(__dirname)
const title = 'JavaScript'
const firstPost = 'basic-types'

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
        'basic-types',
        'event'
      ]
    },
    objectConfig
  ]
}

module.exports = {
  navItem,
  sidebar
}
