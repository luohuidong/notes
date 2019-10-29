const { getDocsDirectory } = require('../../utils')


const path = getDocsDirectory(__dirname)
const title = 'React'
const firstPost = 'material'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'React',
      children: [
        'material',
        'material',
        'ssr-csr',
        'data-flow',
        'lifecycle',
        'fragments'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
