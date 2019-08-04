const navConfig = require('./nav')
const sidebar = require('./siderBar')

module.exports = {
  title: 'Code Notes',
  description: 'Emmmm...',
  base: '/notes/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: navConfig,
    sidebar,
  }
}
