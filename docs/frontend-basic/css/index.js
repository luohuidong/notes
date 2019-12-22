const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'CSS'
const firstPost = 'scroll-bar-style'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'CSS',
      children: [
        'scroll-bar-style',
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
