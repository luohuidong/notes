const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'CSS'
const firstPost = 'material'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'CSS',
      children: [
        firstPost,
        'layout',
        'bfc',
        'scroll-bar-style',
      ]
    },
    {
      title: '文字样式',
      children: [

      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
