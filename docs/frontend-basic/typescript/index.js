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
        'interfaces'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
