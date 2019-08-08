const path = '/basics/typescript/'
const title = 'TypeScript'
const firstPost = 'basic-types'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title,
      collapsable: false,
      children: [
        firstPost,
        'interfaces'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
