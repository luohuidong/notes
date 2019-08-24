const frontendBasic = require('../frontend-basic/')
const advance = require('../advance/')
const react = require('../react/')
const computerBasic = require('../computer-basic')

module.exports = {
  title: 'Code Notes',
  description: '代码笔录',
  base: '/notes/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      frontendBasic.nav,
      react.nav,
      advance.nav,
      computerBasic.nav,
    ],
    sidebarDepth: 1,
    sidebar: {
      ...frontendBasic.sidebar,
      ...advance.sidebar,
      ...computerBasic.sidebar
    },
  }
}
