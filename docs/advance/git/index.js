const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Git'
const firstPost = 'material'

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
        'start',
        'getting-a-git-repository',
        'recording-changes-to-the-repository'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
