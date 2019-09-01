const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Electron'
const firstPost = 'start'

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
        'electron-builder',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
