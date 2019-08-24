const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'HTML'
const firstPost = 'image'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'HTML',
      children: [
        firstPost,
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}
