const { generateNavAndSidebarConfig } = require('../utils')
const organizationAndArchitecture = require('./organization-and-architecture')
const designPatternConfig = require('./design-pattern')
const compilersConfig = require('./compilers')
const softwareDevelopmentConfig = require('./software-development')
const dataStructureConfig = require('./data-structure')

const docs = [
  organizationAndArchitecture, designPatternConfig, compilersConfig,
  softwareDevelopmentConfig, dataStructureConfig
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
