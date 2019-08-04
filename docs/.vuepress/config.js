const navConfig = require('./nav')
const sidebar = require('./siderBar')

module.exports = {
  title: 'Code Notes',
  description: 'Emmmm...',
  base: '/notes/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: navConfig,
    sidebar,
  }
}
