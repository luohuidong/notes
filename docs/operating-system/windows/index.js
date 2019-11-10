const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Windows'
const firstPost = 'proxy'

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
        'chocolatey'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
