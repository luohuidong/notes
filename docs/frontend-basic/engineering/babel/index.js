const { getDocsDirectory } = require('../../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Babel'
const firstPost = 'what-is-babel'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    'todo',
    {
      title,
      children: [
        firstPost,
        'concept',
        'configure-babel',
        'plugins',
        'presets'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
