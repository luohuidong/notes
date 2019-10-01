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
    'material',
    {
      title: 'React',
      children: [
        'react/ssr-csr',
        'react/data-flow',
        'react/lifecycle',
        'react/fragments'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
