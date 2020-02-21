const { getDocsDirectory } = require('../../../utils')

const path = getDocsDirectory(__dirname)
const firstPost = 'material'

const navItem = {
  text: '监控',
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: '前端监控',
      children: [
        'material',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
