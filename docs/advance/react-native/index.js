const { getDocsDirectory } = require('../../utils')


const path = getDocsDirectory(__dirname)
const title = 'React Native'
const firstPost = 'gradle-proxy'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'React Native',
      children: [
        `${firstPost}`
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
