const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)

const navItem = {
  text: '软件开发',
  link: `${path}2020-1-6`
}

const sidebar = {
  [path]: [
    {
      title: '敏捷开发',
      children: [
        '2020-1-6',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
