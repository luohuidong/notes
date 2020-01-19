const { generateNavAndSidebarConfig } = require('../utils')

const gitConfig = require('./git')


const docs = [
  gitConfig,
]
const nav = {
  text: '进阶',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}
