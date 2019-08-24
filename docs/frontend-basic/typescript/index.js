const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'TypeScript'
const firstPost = 'basic-types'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title,
      children: [
        firstPost,
        'basic-types-2',
        'basic-types-3',
        'interfaces'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
