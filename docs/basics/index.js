const htmlSidebar = require('./html/sidebar')

// 定义 navBar 中前端基础相关的可选项
const nav = { 
  text: '前端基础', 
  items: [
    { text: 'HTML', link: '/basics/html/' },
    { text: 'CSS', link: '/basics/css/' },
    { 
      text: 'ECMAScript', 
      items: [
        { text: 'ES5', link: '/basics/es5/' },
        { text: 'ES2015', link: '/basics/es6/' }
      ]
    }
  ]
}

const sidebar = {
  ...htmlSidebar
}

module.exports = {
  nav,
  sidebar
}
