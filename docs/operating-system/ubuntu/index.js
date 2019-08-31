const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Ubuntu'
const firstPost = 'change-apt-source'

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
        'apt-proxy'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
