const frontendBasic = require('../frontend-basic/')
const computerBasic = require('../computer-basic')
const operatingSystem = require('../operating-system')
const backend = require('../backend')
const blog = require('../blog')

const docs = [frontendBasic, backend, computerBasic, operatingSystem, blog]

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
    lastUpdated: 'Last Updated',
    // Git repository. Assumes GitHub.
    repo: 'luohuidong/notes',
    nav,
    sidebarDepth: 1,
    sidebar,

    // Optional options for generating "Edit this page" link

    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub',
  }
}
