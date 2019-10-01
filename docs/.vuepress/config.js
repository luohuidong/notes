const frontendBasic = require('../frontend-basic/')
const advance = require('../advance/')
const computerBasic = require('../computer-basic')
const operatingSystem = require('../operating-system')

const docs = [frontendBasic, advance, computerBasic, operatingSystem]

let nav = [{
  text: '首页',
  link: '/',
}]
let sidebar = {}

docs.forEach(element => {
  nav.push(element.nav)
  Object.assign(sidebar, element.sidebar)
});

module.exports = {
  title: 'Code Notes',
  description: '代码笔录',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    algolia: {
      apiKey: 'fbf9f88e164fd5ec4f180d6710009d80',
      indexName: 'luohuidong',
    },
    nav,
    sidebarDepth: 1,
    sidebar,
  }
}
