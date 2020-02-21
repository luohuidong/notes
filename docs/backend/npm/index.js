const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'npm'
const firstPost = 'material'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'npm',
      children: [
        firstPost,
        'npm-scripts'
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
