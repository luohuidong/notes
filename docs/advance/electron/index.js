const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Electron'
const firstPost = 'material'

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
        'start',
        'electron-builder',
        'update',
        'code-signing'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
