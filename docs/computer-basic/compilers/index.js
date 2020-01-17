const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const firstPost = '2020-1-15'

const navItem = {
  text: '编译原理',
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: '编译原理',
      collapsable: false,
      children: [
        firstPost,
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
