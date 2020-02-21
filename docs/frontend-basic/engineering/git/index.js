const { getDocsDirectory, addPrefix } = require('../../../utils')

const path = getDocsDirectory(__dirname)

const navItem = {
  text: 'Git',
  link: `${path}material`
}

const sidebar = {
  [path]: [
    {
      title: 'Git',
      children: [
        'material',
        'git-flow'
      ]
    },
    {
      title: 'Git 基础',
      children: addPrefix([
        'start',
        'getting-a-git-repository',
        '2020-1-23',
        'recording-changes-to-the-repository',
        'rename-filename',
        'git-log',
        'git-folder',
        'git-objects',
      ], 'chapter1/')
    },
    {
      title: '独自使用 Git 时的常见场景',
      children: addPrefix([
        '2020-1-23',
        '2020-1-23-2'
      ], 'chapter2/')
    }
  ],
}

module.exports = {
  navItem,
  sidebar
}
