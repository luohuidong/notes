const path = '/computer-basic/design-pattern/'
const title = '设计模式'
const firstPost = 'oop'

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
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}
