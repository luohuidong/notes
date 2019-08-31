const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Electron'
const firstPost = 'electron-builder'

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
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
