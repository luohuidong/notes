const basics = require('../basics')
const advance = require('../advance')
const react = require('../react/')

module.exports = {
  title: 'Code Notes',
  description: '我的代码笔录',
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
      basics.nav,
      react.nav,
      advance.nav,
    ],
    sidebar: {
      ...basics.sidebar,
      ...advance.sidebar
    },
  }
}
