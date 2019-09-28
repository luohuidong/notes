const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'CSS'
const firstPost = 'layout'

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
        'bfc'
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
