const organizationAndArchitecture = require('./organization-and-architecture')

const nav = {
  text: '计算机基础',
  items: [
    organizationAndArchitecture.navItem
  ]
}

const sidebar = {
  ...organizationAndArchitecture.sidebar,
}

module.exports = {
  nav,
  sidebar
}
