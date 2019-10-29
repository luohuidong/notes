const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'TypeScript'
const firstPost = 'material'

const basicTypes = require('./basic-types')
const enums = require('./enums')
const interfaces = require('./interfaces')

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
        'function',
        'generics'
      ]
    },
    basicTypes,
    enums,
    interfaces
  ],
}

module.exports = {
  navItem,
  sidebar
}
