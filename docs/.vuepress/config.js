const navConfig = require('./nav')
const sidebar = require('./siderBar')

module.exports = {
  title: 'Code Notes',
  description: 'Emmmm...',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: navConfig,
    sidebar,
  }
}
