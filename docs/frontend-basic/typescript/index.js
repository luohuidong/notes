const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'TypeScript'
const firstPost = 'material'

const basicTypes = require('./basic-types')
const enums = require('./enums')

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
        'interfaces',
      ]
    },
    basicTypes,
    enums
  ],
}

module.exports = {
  navItem,
  sidebar
}
