const { getDocsDirectory } = require('../../../utils')

const path = getDocsDirectory(__dirname)
const title = 'React Native'
const firstPost = 'material'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'React Native',
      children: [
        `${firstPost}`,
        'gradle-proxy'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
