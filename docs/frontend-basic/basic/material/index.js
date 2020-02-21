const { getDocsDirectory } = require('../../../utils')

const currentDirectoryPath = getDocsDirectory(__dirname)

const navItem = {
  text: '基础',
  link: `${currentDirectoryPath}material`
}

const sidebar = {
  [currentDirectoryPath]: [
    {
      title: '基础',
      children: [
        'material',
        'cors',
        'dom',
        'event',
        'form',
        'image',
        'layout',
        'scroll-bar-style',
        'video-audio',
        'web-api'
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
