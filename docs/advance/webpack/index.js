const path = '/advance/webpack/'
const title = 'Webpack'
const firstPost = 'concepts'

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
