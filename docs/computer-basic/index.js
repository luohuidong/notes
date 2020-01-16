const { generateNavAndSidebarConfig } = require('../utils')
const organizationAndArchitecture = require('./organization-and-architecture')
const designPatternConfig = require('./design-pattern')
const compilersConfig = require('./compilers')
const softwareDevelopmentConfig = require('./software-development')

const docs = [
  organizationAndArchitecture, designPatternConfig, compilersConfig,
  softwareDevelopmentConfig
]
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
