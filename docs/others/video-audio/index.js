const { getDocsDirectory, addPrefix } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = '音视频入门'
const firstPost = '2020-02-29'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: '音视频入门',
      children: [
        firstPost
      ]
    },
  ],
}

module.exports = {
  navItem,
  sidebar
}
