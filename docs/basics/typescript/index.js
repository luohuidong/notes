const path = '/basics/typescript/'
const title = 'TypeScript'
const firstPost = 'basic-types-1'

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
        'basic-types-2',
        'basic-types-3',
        'interfaces'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
