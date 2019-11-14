const { generateNavAndSidebarConfig } = require('../utils')
const organizationAndArchitecture = require('./organization-and-architecture')
const designPatternConfig = require('./design-pattern')

const docs = [organizationAndArchitecture, designPatternConfig]
const nav = {
  text: '计算机基础',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
