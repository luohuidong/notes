const { getDocsDirectory } = require('../../../utils')

const path = getDocsDirectory(__dirname)
const title = '浏览器工作原理'
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
        'navigation',
        'render'
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
