const { getDocsDirectory, addPrefix } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = '数据结构与算法'
const firstPost = 'introduce/2020-02-25'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: '数据结构与算法简介',
      children: addPrefix([
        '2020-02-25',
        '2020-02-26'
      ], 'introduce')
    },

  ],
}

module.exports = {
  navItem,
  sidebar
}
