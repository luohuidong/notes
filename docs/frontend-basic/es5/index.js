const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'ES5'
const firstPost = 'basic-types'

// 定义导航中 ES5 链接
const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

// 定义 ES5 相关内容的侧边栏
const sidebar = {
  [path]: [
    {
      title,
      collapsable: false,
      children: [
        'basic-types',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
