const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const firstPost = 'material'

const navItem = {
  text: '自动化测试',
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: '自动化测试',
      children: [
        'material',
      ]
    }
  ]
};

module.exports = {
  navItem,
  sidebar
}
