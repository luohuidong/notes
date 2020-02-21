const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const firstPost = 'material'

const navItem = {
  text: 'Node',
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'Node',
      children: [
        'material',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
